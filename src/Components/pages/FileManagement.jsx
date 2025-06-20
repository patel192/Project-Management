import React, { useState, useMemo } from 'react';

export const FileManagement = () => {
     const [files, setFiles] = useState([
    { id: 'file001', name: 'Project_Genesis_Blueprint.pdf', type: 'document', size: '2.5MB', uploadDate: '2025-06-18', uploadedBy: 'Commander Hex' },
    { id: 'file002', name: 'UI_Wireframes_V1.sketch', type: 'design', size: '15.1MB', uploadDate: '2025-06-19', uploadedBy: 'Visual_Jockey' },
    { id: 'file003', name: 'API_Spec_NeuralLink.json', type: 'code', size: '0.8MB', uploadDate: '2025-06-17', uploadedBy: 'Synth_Engineer' },
    { id: 'file004', name: 'Security_Audit_Report.docx', type: 'document', size: '1.2MB', uploadDate: '2025-06-19', uploadedBy: 'Ghost_Protocol' },
    { id: 'file005', name: 'Monthly_Burn_Down_Graph.png', type: 'image', size: '0.3MB', uploadDate: '2025-06-15', uploadedBy: 'Data_Analyst' },
    { id: 'file006', name: 'Client_Feedback_Log.csv', type: 'data', size: '0.5MB', uploadDate: '2025-06-16', uploadedBy: 'Commander Hex' },
  ]);
   const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const filteredFiles = useMemo(() => {
    return files.filter(file =>
      (searchTerm === '' ||
       file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       file.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterType === 'All' || file.type === filterType)
    );
  }, [files, searchTerm, filterType]);
   const handleUploadFile = () => {
    // Placeholder for file upload logic (would typically open a file input dialog)
    alert('Initiating file upload sequence... (This is a simulation)');
    console.log('Upload file button clicked.');
  };
  const handleDownloadFile = (fileName) => {
    // Placeholder for file download logic
    alert(`Downloading "${fileName}"... (This is a simulation)`);
    console.log(`Downloading: ${fileName}`);
  };
   const handleDeleteFile = (id, fileName) => {
    if (window.confirm(`Are you sure you want to purge "${fileName}" from the system? This action cannot be reverted.`)) {
      setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
      alert(`File "${fileName}" purged.`);
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'document': return (
        <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      );
      case 'design': return (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 21h.01M12 17v5m-4 5h8a2 2 0 002-2V9a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      );
      case 'code': return (
        <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16L2 12l4-4"></path>
        </svg>
      );
      case 'image': return (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      );
      case 'data': return (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10m0 0h16m-16 0l-1-1m1-1V4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-3l-1 1M4 12h16"></path>
        </svg>
      );
      default: return (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0015.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      );
    }
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

        /* Border Animation for File Management main content */
        @keyframes border-glow-files {
          0%, 100% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          33% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          66% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
        }
        .animate-border-glow-files {
            border: 2px solid;
            animation: border-glow-files 10s infinite alternate;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">FILE SYSTEM // DATA VAULT</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="SEARCH FILE / UPLOADER..."
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 w-48 md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="document">Document</option>
            <option value="design">Design</option>
            <option value="code">Code</option>
            <option value="image">Image</option>
            <option value="data">Data</option>
          </select>
          <button
            onClick={handleUploadFile}
            className="px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-sm"
          >
            + UPLOAD FILE
          </button>
        </div>
      </header>

      {/* File List Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-files"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-files" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-files)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-files)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-files)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 bg-zinc-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
          <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">ACTIVE DATA CONDUITS</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-700">
              <thead className="bg-zinc-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    File Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Upload Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Uploaded By
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                {filteredFiles.length > 0 ? (
                  filteredFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-zinc-700/50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center">
                        <span className="mr-3">{getFileIcon(file.type)}</span>
                        <span className="text-cyan-300 font-medium">{file.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300 capitalize">{file.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{file.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{new Date(file.uploadDate).toLocaleDateString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-fuchsia-300">{file.uploadedBy}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDownloadFile(file.name)}
                          className="text-cyan-400 hover:text-cyan-600 mr-4 transition-colors duration-200"
                        >
                          DOWNLOAD
                        </button>
                        <button
                          onClick={() => handleDeleteFile(file.id, file.name)}
                          className="text-red-400 hover:text-red-600 transition-colors duration-200"
                        >
                          PURGE
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500 italic">No files found matching your criteria.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
