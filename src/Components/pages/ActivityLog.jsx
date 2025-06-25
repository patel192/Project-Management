import React, { useState, useMemo } from 'react';

function ActivityLog() {
  const [activities, setActivities] = useState([
    { id: 'act001', timestamp: '2025-06-20T10:30:00Z', user: 'Commander Hex', action: 'Project "Quantum Nexus Initiative" updated status to "High Alert".', type: 'project_update' },
    { id: 'act002', timestamp: '2025-06-20T10:25:00Z', user: 'Synth_Engineer', action: 'Task "Develop secure API endpoint" marked as completed.', type: 'task_completion' },
    { id: 'act003', timestamp: '2025-06-20T09:45:00Z', user: 'System', action: 'Automated data backup initiated for all active projects.', type: 'system_event' },
    { id: 'act004', timestamp: '2025-06-19T18:00:00Z', user: 'Visual_Jockey', action: 'Uploaded new design assets for "Neural Link Interface".', type: 'file_upload' },
    { id: 'act005', timestamp: '2025-06-19T15:20:00Z', user: 'Ghost_Protocol', action: 'Initiated security vulnerability scan on all modules.', type: 'security_event' },
    { id: 'act006', timestamp: '2025-06-19T11:00:00Z', user: 'Commander Hex', action: 'Assigned "Task 007: Deploy auth module" to Synth_Engineer.', type: 'task_assignment' },
    { id: 'act007', timestamp: '2025-06-18T08:10:00Z', user: 'System', action: 'User "Law_Bot" logged in successfully.', type: 'user_login' },
    { id: 'act008', timestamp: '2025-06-18T07:55:00Z', user: 'Commander Hex', action: 'Reviewed and approved "Q2 Financial Overview" report.', type: 'report_review' },
    { id: 'act009', timestamp: '2025-06-17T14:30:00Z', user: 'Data_Analyst', action: 'Generated performance analytics for QNI project.', type: 'report_generation' },
    { id: 'act010', timestamp: '2025-06-17T11:20:00Z', user: 'System', action: 'New project "Hyperloop Network Beta" initiated.', type: 'project_creation' },
  ]);

  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredActivities = useMemo(() => {
    let current = activities;
    if (filterType !== 'All') current = current.filter(a => a.type === filterType);
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      current = current.filter(a =>
        a.user.toLowerCase().includes(s) ||
        a.action.toLowerCase().includes(s) ||
        a.type.toLowerCase().includes(s)
      );
    }
    return current.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, [activities, filterType, searchTerm]);

  const getActivityColor = (type) => {
    switch (type) {
      case 'project_update': return 'text-fuchsia-400';
      case 'task_completion': return 'text-lime-400';
      case 'system_event': return 'text-cyan-400';
      case 'file_upload': return 'text-yellow-400';
      case 'security_event': return 'text-red-400';
      case 'task_assignment': return 'text-blue-400';
      case 'user_login': return 'text-green-400';
      case 'report_review': return 'text-purple-400';
      case 'report_generation': return 'text-orange-400';
      case 'project_creation': return 'text-indigo-400';
      default: return 'text-gray-300';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'project_update': return '⚙️';
      case 'task_completion': return '✅';
      case 'system_event': return '💻';
      case 'file_upload': return '📁';
      case 'security_event': return '🛡️';
      case 'task_assignment': return '➡️';
      case 'user_login': return '👤';
      case 'report_review': return '📊';
      case 'report_generation': return '📈';
      case 'project_creation': return '✨';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-gray-100 flex flex-col">
      <style>{`
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

        @keyframes border-glow-activity {
          0%, 100% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); }
          33% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); }
          66% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); }
        }
        .animate-border-glow-activity {
          border: 2px solid;
          animation: border-glow-activity 12.5s infinite alternate;
        }

        .activity-card-glow {
          position: relative;
          overflow: hidden;
        }
        .activity-card-glow::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background: linear-gradient(135deg, rgba(236,72,153,0.15), rgba(34,211,238,0.15));
          filter: blur(10px);
          z-index: -1;
        }

        .glitch {
          position: relative;
          color: #f0f;
          font-weight: bold;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          background: transparent;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          color: #0ff;
          animation: glitchTop 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          color: #f0f;
          animation: glitchBottom 2s infinite linear alternate-reverse;
        }

        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          10% { clip: rect(0, 9999px, 10px, 0); }
          20% { clip: rect(0, 9999px, 0, 0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); }
          10% { clip: rect(10px, 9999px, 15px, 0); }
          20% { clip: rect(0, 9999px, 0, 0); }
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(#0ff, #f0f);
          border-radius: 5px;
        }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
      `}</style>

      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1
          data-text="ACTIVITY LOG // OPERATIONAL HISTORY"
          className="glitch text-3xl"
        >
          ACTIVITY LOG // OPERATIONAL HISTORY
        </h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="SEARCH ACTION / USER..."
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
            <option value="project_update">Project Updates</option>
            <option value="task_completion">Task Completions</option>
            <option value="system_event">System Events</option>
            <option value="file_upload">File Uploads</option>
            <option value="security_event">Security Events</option>
            <option value="task_assignment">Task Assignments</option>
            <option value="user_login">User Logins</option>
            <option value="report_review">Report Reviews</option>
            <option value="report_generation">Report Generations</option>
            <option value="project_creation">Project Creations</option>
          </select>
          <button
            onClick={() => setActivities([])}
            className="px-5 py-2 bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold rounded-md shadow-lg shadow-red-500/30 hover:shadow-pink-500/80 hover:ring-2 hover:ring-fuchsia-500 hover:animate-pulse transform hover:scale-105 transition-all duration-300 border-2 border-red-400 uppercase text-sm"
          >
            PURGE LOG
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-activity">
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-activity" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-activity)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-activity)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-activity)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map(activity => (
              <div key={activity.id} className={`activity-card-glow p-6 rounded-lg shadow-xl border border-zinc-700/50 bg-zinc-800/50 hover:scale-[1.01] transition-transform duration-200 ease-in-out`}>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{getActivityIcon(activity.type)}</span>
                  <span className={`text-lg font-bold ${getActivityColor(activity.type)} uppercase`}>
                    {activity.type.replace(/_/g, ' ')} //
                  </span>
                  <span className="ml-2 text-gray-400 text-sm font-mono">
                    {new Date(activity.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-200 text-base mb-2">
                  <span className="font-semibold text-fuchsia-300">{activity.user}</span>: {activity.action}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 italic p-8 bg-zinc-800 rounded-lg border border-zinc-700">
              No activities recorded for the current filters. Log empty.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ActivityLog;
