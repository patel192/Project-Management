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
    alert('Upload simulation triggered!');
  };

  const handleDownloadFile = (fileName) => {
    alert(`Downloading "${fileName}"...`);
  };

  const handleDeleteFile = (id, fileName) => {
    if (window.confirm(`Delete "${fileName}"?`)) {
      setFiles(prev => prev.filter(file => file.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ⧉ Data Vault Control Panel
          </h1>
          <div className="flex gap-3 flex-wrap">
            <input
              type="text"
              placeholder="Search file / uploader..."
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-sm text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
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
              className="bg-gradient-to-tr from-fuchsia-600 to-cyan-500 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              + Upload File
            </button>
          </div>
        </header>

        <div className="bg-white/10 border border-white/20 rounded-xl shadow-xl backdrop-blur-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-cyan-200">
              <tr>
                <th className="px-6 py-4">File Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Size</th>
                <th className="px-6 py-4">Uploaded</th>
                <th className="px-6 py-4">Uploader</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredFiles.length > 0 ? (
                filteredFiles.map(file => (
                  <tr key={file.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 text-white">{file.name}</td>
                    <td className="px-6 py-4 capitalize text-fuchsia-300">{file.type}</td>
                    <td className="px-6 py-4 text-gray-300">{file.size}</td>
                    <td className="px-6 py-4 text-gray-300">{new Date(file.uploadDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-cyan-400">{file.uploadedBy}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleDownloadFile(file.name)}
                        className="text-sm text-cyan-300 hover:text-cyan-500 transition"
                      >
                        Download
                      </button>
                      <button
                        onClick={() => handleDeleteFile(file.id, file.name)}
                        className="text-sm text-red-400 hover:text-red-600 transition"
                      >
                        Purge
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-400 italic">
                    No files found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
