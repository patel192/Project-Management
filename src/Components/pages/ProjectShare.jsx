import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, onSnapshot, updateDoc, setDoc } from 'firebase/firestore';

export const ProjectShare = () => {
    const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false); // To ensure Firestore operations wait for auth
  const [projectData, setProjectData] = useState(null);
  const [shareableLink, setShareableLink] = useState('');
  const [isCollaborative, setIsCollaborative] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copyStatus, setCopyStatus] = useState(''); // State for copy feedback
  const [toggleFeedback, setToggleFeedback] = useState(''); // State for toggle feedback

  // --- Configuration & Initialization (from __app_id, __firebase_config, __initial_auth_token) ---
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
  const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
  const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

  // Mock Project ID for demonstration. In a real app, this would come from URL params.
  const mockProjectId = 'shared-project-alpha';

  useEffect(() => {
    try {
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      const firebaseAuth = getAuth(app);

      setDb(firestore);
      setAuth(firebaseAuth);

      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          setUserId(user.uid);
          setIsAuthReady(true);
        } else {
          // If no user, try to sign in with custom token or anonymously
          try {
            if (initialAuthToken) {
              await signInWithCustomToken(firebaseAuth, initialAuthToken);
              setUserId(firebaseAuth.currentUser.uid);
            } else {
              await signInAnonymously(firebaseAuth);
              setUserId(firebaseAuth.currentUser.uid); // Will be a random ID for anonymous
            }
            setIsAuthReady(true);
          } catch (authError) {
            console.error("Firebase Auth Error:", authError);
            setError("Failed to authenticate. Collaboration features may be limited.");
            setIsAuthReady(true); // Still set to true to allow UI to render
          }
        }
      });

      return () => unsubscribe(); // Cleanup auth listener
    } catch (e) {
      console.error("Failed to initialize Firebase:", e);
      setError("Failed to initialize core services. Please try again.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (db && isAuthReady && userId && mockProjectId) {
      setLoading(true);
      setError(null);

      const projectDocRef = doc(db, `/artifacts/${appId}/public/data/projects/${mockProjectId}`);

      const unsubscribe = onSnapshot(projectDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProjectData(data);
          setIsCollaborative(data.isCollaborative || false);
          setLoading(false);
        } else {
          // If project doesn't exist, create a default one for demonstration
          console.warn(`Project with ID ${mockProjectId} not found. Creating a default.`);
          setDoc(projectDocRef, {
            name: `New Shared Project: ${mockProjectId}`,
            description: "This is a collaborative project shared via link.",
            status: "Planning",
            isCollaborative: false,
            ownerId: userId,
            createdAt: new Date().toISOString(),
          }).then(() => {
            console.log("Default project created.");
            // onSnapshot will pick this up immediately, so no need to setProjectData here.
          }).catch(err => {
            console.error("Error creating default project:", err);
            setError("Could not create default project.");
            setLoading(false);
          });
        }
      }, (err) => {
        console.error("Error fetching project data:", err);
        setError("Failed to load project data. Please check your connection.");
        setLoading(false);
      });

      return () => unsubscribe(); // Cleanup snapshot listener
    }
  }, [db, isAuthReady, userId, appId, mockProjectId]);

  useEffect(() => {
    // Generate shareable link
    if (mockProjectId) {
      // In a real deployed app, window.location.origin would be your app's base URL
      // For Canvas environment, this will be the iframe's origin.
      setShareableLink(`${window.location.origin}/share?project=${mockProjectId}`);
    }
  }, [mockProjectId]);

  const handleToggleCollaboration = async () => {
    if (!db || !projectData || !userId) {
      setError("System not ready or project data missing.");
      return;
    }

    const newCollaborativeStatus = !isCollaborative;
    const projectDocRef = doc(db, `/artifacts/${appId}/public/data/projects/${mockProjectId}`);

    try {
      await updateDoc(projectDocRef, {
        isCollaborative: newCollaborativeStatus
      });
      setIsCollaborative(newCollaborativeStatus); // Optimistic update
      setToggleFeedback(newCollaborativeStatus ? 'Collaboration ENABLED' : 'Collaboration DISABLED');
      setTimeout(() => setToggleFeedback(''), 2000); // Clear message
    } catch (err) {
      console.error("Error updating collaboration status:", err);
      setError("Failed to update collaboration status. Access denied or network issue.");
      setToggleFeedback('Update FAILED!');
      setTimeout(() => setToggleFeedback(''), 2000); // Clear message
    }
  };

  const copyToClipboard = () => {
    if (shareableLink) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(shareableLink)
            .then(() => {
              setCopyStatus('LINK COPIED!');
              setTimeout(() => setCopyStatus(''), 2000); // Clear message after 2 seconds
            })
            .catch(err => {
              console.error('Failed to copy text: ', err);
              setCopyStatus('COPY FAILED!');
              setTimeout(() => setCopyStatus(''), 2000); // Clear message
            });
        } else {
          // Fallback for browsers that don't support navigator.clipboard
          const textArea = document.createElement("textarea");
          textArea.value = shareableLink;
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            document.execCommand('copy');
            setCopyStatus('LINK COPIED (fallback)!');
            setTimeout(() => setCopyStatus(''), 2000);
          } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            setCopyStatus('COPY FAILED (fallback)!');
            setTimeout(() => setCopyStatus(''), 2000);
          }
          document.body.removeChild(textArea);
        }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 font-inter text-gray-100">
        <p className="text-xl text-fuchsia-400 animate-pulse">INITIATING SHARE PROTOCOL // LOADING DATA...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 font-inter text-red-400">
        <p className="text-xl">ERROR: {error}</p>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 font-inter text-gray-400">
        <p className="text-xl">WARNING: No project data available. System offline or ID corrupted.</p>
      </div>
    );
  }

  return (
     <div className="min-h-screen flex flex-col bg-zinc-950 font-inter text-gray-100">
      {/* Local Styles for Animations */}
      <style>
        {`
        @keyframes slide-diagonal-x {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-100%) translateY(-100%); }
        }
        @keyframes slide-diagonal-x-reverse {
          0% { transform: translateX(-100%) translateY(-100%); }
          100% { transform: translateX(0) translateY(0); }
        }
        .animate-slide-diagonal-x-medium { animation: slide-diagonal-x 45s linear infinite; }
        .animate-slide-diagonal-x-reverse-medium { animation: slide-diagonal-x-reverse 45s linear infinite; }

        /* Border Animation for Share Component main content */
        @keyframes border-glow-share {
          0%, 100% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          33% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          66% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
        }
        .animate-border-glow-share {
            border: 2px solid;
            animation: border-glow-share 7s infinite alternate;
        }

        /* Custom Toggle Switch Styling */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 70px; /* Wider switch */
          height: 38px; /* Taller switch */
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #333; /* Darker grey for off state */
          transition: .4s;
          border-radius: 38px; /* Fully rounded */
          box-shadow: inset 0 0 5px rgba(0,0,0,0.5); /* Inner shadow for depth */
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 30px; /* Larger handle */
          width: 30px;
          left: 4px;
          bottom: 4px;
          background-color: #777; /* Neutral grey handle */
          transition: .4s;
          border-radius: 50%; /* Circular handle */
          box-shadow: 0 2px 5px rgba(0,0,0,0.3); /* Handle shadow */
        }

        input:checked + .slider {
          background-color: #00CED1; /* Cyan for on state */
          box-shadow: 0 0 8px #00CED1, inset 0 0 5px rgba(0,0,0,0.5); /* Outer glow and inner shadow */
        }

        input:checked + .slider:before {
          transform: translateX(32px); /* Move handle further right */
          background-color: #FFF; /* White handle when on */
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">SHARE PROTOCOL // COLLABORATE</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">CURRENT USER ID: <span className="text-cyan-400">{userId || 'N/A'}</span></span>
          <img src="https://i.pravatar.cc/40?img=6" alt="User Avatar" className="h-10 w-10 rounded-full border-2 border-fuchsia-400" />
        </div>
      </header>

      {/* Content Area for Sharing */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-share">
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-share" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-share)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-share)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-share)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          {/* Project Information */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">PROJECT DATA // OVERVIEW</h2>
            <div className="space-y-4 text-gray-300">
              <p><span className="font-semibold text-fuchsia-400 text-lg">PROJECT NAME:</span> <span className="text-xl">{projectData.name}</span></p>
              <p><span className="font-semibold text-fuchsia-400 text-lg">DESCRIPTION:</span> <span className="italic">{projectData.description}</span></p>
              <p><span className="font-semibold text-fuchsia-400 text-lg">STATUS:</span> <span className="px-3 py-1 rounded-full bg-blue-700 text-blue-200 text-sm font-medium">{projectData.status.toUpperCase()}</span></p>
              <p><span className="font-semibold text-fuchsia-400 text-lg">OWNER ID:</span> <span className="text-cyan-300 font-mono">{projectData.ownerId}</span></p>
              <p><span className="font-semibold text-fuchsia-400 text-lg">CREATED:</span> <span className="text-sm">{new Date(projectData.createdAt).toLocaleString()}</span></p>
            </div>
          </div>

          {/* Share Link Section */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">SHARE LINK // SECURE TRANSMISSION</h2>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 w-full relative">
                <input
                  type="text"
                  readOnly
                  value={shareableLink}
                  className="w-full p-3 pr-12 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 cursor-text select-all focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-sm"
                />
                {copyStatus && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-lime-400 animate-pulse">
                    {copyStatus}
                  </span>
                )}
              </div>
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 uppercase text-sm w-full md:w-auto"
              >
                COPY LINK
              </button>
            </div>
            <p className="mt-4 text-gray-500 text-sm italic">
                Distribute this link to provide access to the project. Collaboration settings below determine edit permissions.
            </p>
          </div>

          {/* Collaboration Toggle */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-lime-500/10 border border-lime-700/50">
            <h2 className="text-2xl font-bold text-lime-400 mb-6 border-b border-lime-600/30 pb-3">ACCESS CONTROL // COLLABORATION SETTINGS</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-300">ALLOW EXTERNAL EDIT ACCESS</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isCollaborative}
                  onChange={handleToggleCollaboration}
                />
                <span className="slider"></span>
              </label>
            </div>
            {toggleFeedback && (
                <p className={`text-center font-bold text-sm mb-4 ${toggleFeedback.includes('ENABLED') ? 'text-lime-400' : toggleFeedback.includes('DISABLED') ? 'text-fuchsia-400' : 'text-red-400'}`}>
                    {toggleFeedback}
                </p>
            )}
            <p className="text-gray-500 text-sm italic">
              {isCollaborative
                ? "WARNING: Collaboration ENABLED. Any user with the share link will have read AND write permissions to this project data. Ensure you trust the recipients."
                : "INFO: Collaboration DISABLED. The share link provides read-only access. Project data is secured from external modification. Only the owner can make changes."
              }
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
