import React from 'react'
import { useState,useMemo } from 'react';
export const Projects = () => {
     const [projects, setProjects] = useState([
    { id: 'proj001', name: 'Project Chimera', status: 'In Progress', progress: 65, client: 'OmniCorp', lead: 'J. Kaito', started: '2025-05-10' },
    { id: 'proj002', name: 'Neural Link Interface', status: 'Completed', progress: 100, client: 'Synaptic Solutions', lead: 'A. Lin', started: '2024-11-20' },
    { id: 'proj003', name: 'Urban Drone Network', status: 'On Hold', progress: 30, client: 'City Grid', lead: 'R. Vargas', started: '2025-03-01' },
    { id: 'proj004', name: 'Data Stream Optimization', status: 'Overdue', progress: 80, client: 'QuantX Data', lead: 'S. Patel', started: '2025-04-15' },
    { id: 'proj005', name: 'Automated Cyber-Defense', status: 'In Progress', progress: 45, client: 'SecureNet', lead: 'M. Kim', started: '2025-06-01' },
    { id: 'proj006', name: 'Virtual Reality Arena', status: 'Planning', progress: 10, client: 'MetaVerse Inc.', lead: 'E. Thorne', started: '2025-07-01' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Memoize filtered projects for performance
  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.lead.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [projects, searchTerm]);

  // Handle adding a new project (placeholder functionality)
  const handleAddProject = () => {
    const newProjectId = `proj${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    const newProject = {
      id: newProjectId,
      name: `New Project ${newProjectId.slice(4)}`,
      status: 'Planning',
      progress: 0,
      client: 'New Client Co.',
      lead: 'N/A',
      started: new Date().toISOString().slice(0, 10),
    };
    setProjects(prevProjects => [...prevProjects, newProject]);
    alert(`New project "${newProject.name}" added!`); // Using alert for simple demo
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">PROJECTS // MANIFEST</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="SEARCH PROJECT ID/NAME..."
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 w-48 md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleAddProject}
            className="px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-sm"
          >
            + ADD NEW PROJECT
          </button>
        </div>
      </header>

      {/* Projects List */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950">
        <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">ACTIVE PROJECT DATABASE</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-700">
              <thead className="bg-zinc-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Project Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Project Lead
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Start Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-zinc-700/50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-cyan-300 font-medium">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === 'Completed' ? 'bg-green-700 text-green-200' :
                          project.status === 'In Progress' ? 'bg-blue-700 text-blue-200' :
                          project.status === 'Overdue' ? 'bg-red-700 text-red-200' :
                          project.status === 'On Hold' ? 'bg-yellow-700 text-yellow-200' :
                          'bg-gray-700 text-gray-200'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-24 bg-zinc-700 rounded-full h-2.5">
                          <div className={`h-2.5 rounded-full ${
                            project.progress === 100 ? 'bg-green-500' : 'bg-fuchsia-500'
                          }`} style={{ width: `${project.progress}%` }}></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-400">{project.progress}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{project.client}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{project.lead}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{project.started}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500 italic">No projects match your search criteria.</td>
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
