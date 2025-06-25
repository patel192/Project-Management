import React from 'react';

export const DashBoard = () => {
  const projects = [
    { id: 'p1', name: 'Cybernetic Interface V3', status: 'In Progress', progress: 75, dueDate: '2025-07-30' },
    { id: 'p2', name: 'Neural Network Optimization', status: 'Completed', progress: 100, dueDate: '2025-06-15' },
    { id: 'p3', name: 'Quantum Encryption Module', status: 'Overdue', progress: 40, dueDate: '2025-06-01' },
    { id: 'p4', name: 'Automated Drone Delivery System', status: 'Planning', progress: 10, dueDate: '2025-09-01' },
  ];

  const recentActivities = [
    { id: 'a1', description: 'Updated task to In Progress', time: '10 mins ago', user: 'You' },
    { id: 'a2', description: 'Assigned encryption protocols to Unit 7', time: '1 hour ago', user: 'System' },
    { id: 'a3', description: 'Launched "Drone Delivery" project', time: 'Yesterday', user: 'Admin' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white font-mono">
      <header className="flex justify-between items-center p-6 border-b border-cyan-500/20 shadow-lg backdrop-blur-md bg-zinc-900/40 sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-cyan-400 tracking-wide">DASHBOARD // CONTROL CENTER</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Welcome, <span className="text-fuchsia-400">OPERATOR</span></span>
          <img src="https://i.pravatar.cc/40?img=5" className="rounded-full border-2 border-fuchsia-400" />
        </div>
      </header>

      <main className="p-6 space-y-10 max-w-7xl mx-auto">
        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'TOTAL PROJECTS', value: projects.length, color: 'fuchsia' },
            { label: 'IN PROGRESS', value: projects.filter(p => p.status === 'In Progress').length, color: 'cyan' },
            { label: 'COMPLETED', value: projects.filter(p => p.status === 'Completed').length, color: 'lime' },
            { label: 'OVERDUE', value: projects.filter(p => p.status === 'Overdue').length, color: 'rose' },
          ].map(({ label, value, color }) => (
            <div key={label} className={`p-6 rounded-xl bg-zinc-900/60 border border-${color}-500/40 shadow-md shadow-${color}-500/10`}>
              <p className={`text-sm text-${color}-400 tracking-wide`}>{label}</p>
              <p className="text-4xl font-bold text-white">{value}</p>
            </div>
          ))}
        </section>

        {/* Projects Table */}
        <section className="bg-zinc-900/50 border border-fuchsia-500/20 rounded-xl shadow-lg p-6">
          <h2 className="text-xl text-fuchsia-400 mb-4 border-b border-fuchsia-500/20 pb-2">PROJECTS // STATUS MATRIX</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-gray-400 uppercase bg-zinc-800/50 border-b border-zinc-700">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Progress</th>
                  <th className="px-4 py-3 text-left">Due</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.id} className="hover:bg-zinc-800/30 transition">
                    <td className="px-4 py-3 text-cyan-300 font-medium">{p.name}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        p.status === 'Completed' ? 'bg-green-700 text-green-200' :
                        p.status === 'In Progress' ? 'bg-blue-700 text-blue-200' :
                        p.status === 'Overdue' ? 'bg-red-700 text-red-200' :
                        'bg-gray-700 text-gray-200'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-28 bg-zinc-700 rounded-full h-2 overflow-hidden">
                        <div className={`h-2 ${p.progress === 100 ? 'bg-green-500' : 'bg-fuchsia-400'}`} style={{ width: `${p.progress}%` }}></div>
                      </div>
                      <span className="text-gray-400 text-xs ml-2">{p.progress}%</span>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{p.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Activity Log */}
        <section className="bg-zinc-900/60 border border-cyan-500/20 rounded-xl shadow-lg p-6">
          <h2 className="text-xl text-cyan-400 mb-4 border-b border-cyan-500/20 pb-2">ACTIVITY LOG // LAST OPERATIONS</h2>
          <ul className="space-y-4">
            {recentActivities.map(a => (
              <li key={a.id} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-fuchsia-500"></div>
                <div>
                  <p className="text-gray-300">{a.description}</p>
                  <p className="text-xs text-gray-500">{a.user} — {a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};
