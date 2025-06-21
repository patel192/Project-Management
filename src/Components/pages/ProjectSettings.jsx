import React, { useState, useEffect } from 'react';

function ProjectSettings() {
  // Mock Project Settings Data (simulated as if loaded for a specific project)
  const [projectSettings, setProjectSettings] = useState({
    projectName: 'Quantum Nexus Initiative',
    projectID: 'QNI-77-DELTA',
    description: 'Architecting the next-gen inter-network communication protocol. High-risk, high-reward.',
    status: 'In Progress',
    startDate: '2025-05-15',
    dueDate: '2025-12-31',
    budget: 150000,
    isArchived: false,
    accessLevel: 'Team Only', // 'Public', 'Team Only', 'Private'
  });

  const [saveStatus, setSaveStatus] = useState(''); // Feedback for save operations

  // Simulate loading data and initial setup
  useEffect(() => {
    // In a real app, you'd fetch project data based on an ID from the URL or state
    // For now, we use mock data directly.
    setSaveStatus('');
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSaveStatus('SAVING // PLEASE WAIT...');
    // Simulate API call
    setTimeout(() => {
      console.log('Project Settings Saved:', projectSettings);
      setSaveStatus('SETTINGS UPDATED // SYNCHRONIZED');
      setTimeout(() => setSaveStatus(''), 3000); // Clear message after 3 seconds
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-gray-100 flex flex-col">
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

        /* Border Animation for Project Settings main content */
        @keyframes border-glow-project-settings {
          0%, 100% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
          33% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          66% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
        }
        .animate-border-glow-project-settings {
            border: 2px solid;
            animation: border-glow-project-settings 12s infinite alternate;
        }

        /* Toggle switch style for archive */
        .toggle-switch-archive {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        .toggle-switch-archive input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider-archive {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #333;
          transition: .4s;
          border-radius: 34px;
        }
        .slider-archive:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: #777;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider-archive {
          background-color: #dc2626; /* Red for archived */
          box-shadow: 0 0 8px #dc2626;
        }
        input:checked + .slider-archive:before {
          transform: translateX(26px);
          background-color: #FFF;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">PROJECT CONFIG // {projectSettings.projectName.toUpperCase()}</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">PROJECT ID: <span className="text-cyan-400 font-mono">{projectSettings.projectID}</span></span>
        </div>
      </header>

      {/* Project Settings Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-project-settings"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-project-settings" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-project-settings)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-project-settings)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-project-settings)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto bg-zinc-800 p-8 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">GENERAL PARAMETERS // PROJECT METADATA</h2>

          <form onSubmit={handleSaveSettings} className="space-y-6">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 mb-1">PROJECT NAME</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={projectSettings.projectName}
                onChange={handleInputChange}
                className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">DESCRIPTION</label>
              <textarea
                id="description"
                name="description"
                value={projectSettings.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">STATUS</label>
                <select
                  id="status"
                  name="status"
                  value={projectSettings.status}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option>In Progress</option>
                  <option>Planning</option>
                  <option>On Hold</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">ALLOCATED BUDGET ($)</label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={projectSettings.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  min="0"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-1">START DATE</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={projectSettings.startDate}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300 mb-1">DUE DATE</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={projectSettings.dueDate}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="mt-8 pt-6 border-t border-zinc-700">
              <h3 className="text-xl font-bold text-lime-400 mb-4">ADVANCED PROTOCOLS // ACCESS & ARCHIVE</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-300">ARCHIVE PROJECT (DISABLE ACCESS)</span>
                <label className="toggle-switch-archive">
                  <input
                    type="checkbox"
                    name="isArchived"
                    checked={projectSettings.isArchived}
                    onChange={handleInputChange}
                  />
                  <span className="slider-archive"></span>
                </label>
              </div>
              <p className="text-gray-500 text-sm italic mb-6">
                {projectSettings.isArchived
                  ? "WARNING: Project is archived. All active operations will cease. Read-only access for administrators."
                  : "INFO: Project is active. Proceed with operations."
                }
              </p>

              <div>
                <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-300 mb-1">ACCESS LEVEL</label>
                <select
                  id="accessLevel"
                  name="accessLevel"
                  value={projectSettings.accessLevel}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option>Team Only</option>
                  <option>Public</option>
                  <option>Private</option>
                </select>
                <p className="text-gray-500 text-xs mt-2 italic">
                  Defines who can view this project: Public (anyone with link), Team Only (assigned members), Private (owner only).
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-lime-600 to-green-700 text-white font-black text-lg rounded-md shadow-lg shadow-lime-500/30 hover:shadow-lime-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-lime-400 uppercase tracking-widest"
              >
                SAVE CONFIGURATION
              </button>
            </div>
            {saveStatus && (
              <p className={`mt-4 text-center font-bold ${saveStatus.includes('ERROR') ? 'text-red-400' : 'text-lime-400'}`}>
                {saveStatus}
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}

export default ProjectSettings;