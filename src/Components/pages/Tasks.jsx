import React, { useState, useMemo } from 'react';

function Tasks() {
  // Mock Task Data
  const [tasks, setTasks] = useState([
    { id: 'task001', name: 'Develop API for data transfer', project: 'Quantum Nexus Initiative', status: 'In Progress', priority: 'High', dueDate: '2025-07-15' },
    { id: 'task002', name: 'Design Neural Link dashboard UI', project: 'Neural Link Interface', status: 'Pending', priority: 'Medium', dueDate: '2025-07-05' },
    { id: 'task003', name: 'Implement secure data pipeline', project: 'Quantum Nexus Initiative', status: 'Completed', priority: 'High', dueDate: '2025-06-28' },
    { id: 'task004', name: 'Conduct user acceptance testing', project: 'Urban Drone Network', status: 'In Progress', priority: 'Low', dueDate: '2025-07-20' },
    { id: 'task005', name: 'Optimize database queries', project: 'Data Stream Optimization', status: 'Pending', priority: 'High', dueDate: '2025-07-10' },
    { id: 'task006', name: 'Prepare Q3 financial report', project: 'Automated Cyber-Defense', status: 'Overdue', priority: 'Critical', dueDate: '2025-06-25' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterProject, setFilterProject] = useState('All');

  const availableProjects = useMemo(() => {
    const projects = [...new Set(tasks.map(task => task.project))];
    return ['All', ...projects];
  }, [tasks]);

  // Memoize filtered tasks for performance
  const filteredTasks = useMemo(() => {
    let currentTasks = tasks;

    if (filterStatus !== 'All') {
      currentTasks = currentTasks.filter(task => task.status === filterStatus);
    }
    if (filterPriority !== 'All') {
      currentTasks = currentTasks.filter(task => task.priority === filterPriority);
    }
    if (filterProject !== 'All') {
      currentTasks = currentTasks.filter(task => task.project === filterProject);
    }
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentTasks = currentTasks.filter(task =>
        task.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        task.project.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    return currentTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); // Sort by due date
  }, [tasks, searchTerm, filterStatus, filterPriority, filterProject]);

  const handleMarkComplete = (id, name) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, status: 'Completed' } : task
    ));
    alert(`Task "${name}" marked as Completed!`);
  };

  const handleDeleteTask = (id, name) => {
    if (window.confirm(`Are you sure you want to purge task "${name}"? This action cannot be reverted.`)) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      alert(`Task "${name}" purged.`);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-700 text-blue-200';
      case 'Completed': return 'bg-lime-700 text-lime-200';
      case 'Overdue': return 'bg-red-700 text-red-200';
      case 'Pending': return 'bg-yellow-700 text-yellow-200';
      default: return 'bg-gray-700 text-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-cyan-400';
      case 'Critical': return 'text-fuchsia-400';
      default: return 'text-gray-400';
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

        /* Border Animation for Tasks main content */
        @keyframes border-glow-tasks {
          0%, 100% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
          33% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          66% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
        }
        .animate-border-glow-tasks {
            border: 2px solid;
            animation: border-glow-tasks 15s infinite alternate;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">TASKS // OPERATIONAL LOGS</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="SEARCH TASK / PROJECT..."
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 w-48 md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>
          <select
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterProject}
            onChange={(e) => setFilterProject(e.target.value)}
          >
            {availableProjects.map(project => (
                <option key={project} value={project}>{project}</option>
            ))}
          </select>
          <button
            onClick={() => alert('Initiating new task creation sequence...')}
            className="px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-sm"
          >
            + ADD NEW TASK
          </button>
        </div>
      </header>

      {/* Tasks List Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-tasks"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-tasks" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-tasks)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-tasks)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-tasks)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 bg-zinc-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
          <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">ACTIVE TASK DATABASE</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-700">
              <thead className="bg-zinc-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Task Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Priority
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task) => (
                    <tr key={task.id} className="hover:bg-zinc-700/50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-cyan-300 font-medium">{task.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{task.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(task.status)}`}>
                          {task.status.toUpperCase()}
                        </span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap font-bold ${getPriorityColor(task.priority)}`}>
                        {task.priority.toUpperCase()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {new Date(task.dueDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {task.status !== 'Completed' && (
                          <button
                            onClick={() => handleMarkComplete(task.id, task.name)}
                            className="text-lime-400 hover:text-lime-600 mr-4 transition-colors duration-200"
                            title="Mark as Complete"
                          >
                            COMPLETE
                          </button>
                        )}
                        <button
                          onClick={() => alert(`Editing task "${task.name}"...`)}
                          className="text-cyan-400 hover:text-cyan-600 mr-4 transition-colors duration-200"
                          title="Edit Task"
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => handleDeleteTask(task.id, task.name)}
                          className="text-red-400 hover:text-red-600 transition-colors duration-200"
                          title="Purge Task"
                        >
                          PURGE
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500 italic">No tasks found matching your criteria.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tasks;