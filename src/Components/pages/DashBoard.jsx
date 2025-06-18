import React from 'react'

export const DashBoard = () => {
    const projects = [
    { id: 'p1', name: 'Cybernetic Interface V3', status: 'In Progress', progress: 75, dueDate: '2025-07-30' },
    { id: 'p2', name: 'Neural Network Optimization', status: 'Completed', progress: 100, dueDate: '2025-06-15' },
    { id: 'p3', name: 'Quantum Encryption Module', status: 'Overdue', progress: 40, dueDate: '2025-06-01' },
    { id: 'p4', name: 'Automated Drone Delivery System', status: 'Planning', progress: 10, dueDate: '2025-09-01' },
  ];

  const tasks = [
    { id: 't1', name: 'Develop API for data transfer', project: 'Cybernetic Interface V3', status: 'In Progress', priority: 'High' },
    { id: 't2', name: 'Test encryption protocols', project: 'Quantum Encryption Module', status: 'Pending', priority: 'Medium' },
    { id: 't3', name: 'Design dashboard UI', project: 'Neural Network Optimization', status: 'Completed', priority: 'Low' },
    { id: 't4', name: 'Deploy backend services', project: 'Cybernetic Interface V3', status: 'Overdue', priority: 'High' },
  ];

  const recentActivities = [
    { id: 'a1', description: 'Updated status of "Develop API" task to In Progress', time: '10 mins ago', user: 'You' },
    { id: 'a2', description: 'Assigned "Test encryption protocols" to Unit 7', time: '1 hour ago', user: 'System' },
    { id: 'a3', description: 'New project "Automated Drone Delivery System" initiated', time: 'Yesterday', user: 'Admin' },
  ];

  // Calculate summary statistics
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const inProgressProjects = projects.filter(p => p.status === 'In Progress').length;
  const overdueProjects = projects.filter(p => p.status === 'Overdue').length;

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 font-inter text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 border-r border-fuchsia-600/40 flex flex-col p-4 shadow-lg shadow-fuchsia-500/20">
        <div className="text-3xl font-extrabold text-fuchsia-500 tracking-wider mb-8">
          PRO<span className="text-cyan-400">MANAGE</span>
        </div>
        <nav className="flex-1 space-y-4">
          <a href="#" className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-cyan-400 bg-fuchsia-900/30 border border-cyan-700/50 shadow-md shadow-cyan-500/10 transition-all duration-200 hover:bg-fuchsia-800/40 hover:text-white">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1H11m-4 0a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H7z"></path></svg>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:text-fuchsia-400 hover:bg-zinc-800 transition-colors duration-200">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4 4m0 0l-4-4m4 4V8"></path></svg>
            Projects
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:text-fuchsia-400 hover:bg-zinc-800 transition-colors duration-200">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            Tasks
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:text-fuchsia-400 hover:bg-zinc-800 transition-colors duration-200">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.942 3.313.885 2.443 2.443a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.942 1.543-.885 3.313-2.443 2.443a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.942-3.313-.885-2.443-2.443a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.942-1.543.885-3.313 2.443-2.443a1.724 1.724 0 002.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Settings
          </a>
        </nav>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2077 ProManage. V 2.0.1</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar / Header */}
        <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
          <h1 className="text-3xl font-bold text-cyan-400">Dashboard // OVERVIEW</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, OPERATOR!</span>
            <img src="https://i.pravatar.cc/40?img=5" alt="User Avatar" className="h-10 w-10 rounded-full border-2 border-fuchsia-400" />
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-8 bg-zinc-950">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
              <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Total Projects</h3>
              <p className="text-4xl font-bold text-white">{totalProjects}</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">In Progress</h3>
              <p className="text-4xl font-bold text-white">{inProgressProjects}</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-green-500/10 border border-green-700/50">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Completed</h3>
              <p className="text-4xl font-bold text-white">{completedProjects}</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-red-500/10 border border-red-700/50">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Overdue</h3>
              <p className="text-4xl font-bold text-white">{overdueProjects}</p>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50 mb-10">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">Recent Projects // ACTIVE DATABASES</h2>
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
                      Due Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-zinc-700/50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-cyan-300 font-medium">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === 'Completed' ? 'bg-green-700 text-green-200' :
                          project.status === 'In Progress' ? 'bg-blue-700 text-blue-200' :
                          project.status === 'Overdue' ? 'bg-red-700 text-red-200' :
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
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{project.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">Activity Log // RECENT OPERATIONS</h2>
            <ul className="space-y-4">
              {recentActivities.map(activity => (
                <li key={activity.id} className="flex items-start text-gray-300">
                  <span className="text-fuchsia-500 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </span>
                  <div>
                    <p className="text-lg">{activity.description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium text-fuchsia-300">{activity.user}</span> - {activity.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
