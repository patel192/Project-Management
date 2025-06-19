import React, { useState, useMemo } from 'react';

export const Notifications = () => {
    const [notifications, setNotifications] = useState([
    { id: 'notif001', type: 'alert', message: 'CRITICAL: Data breach detected in Sector Gamma! Immediate action required.', timestamp: '2025-06-19T09:00:00Z', read: false },
    { id: 'notif002', type: 'info', message: 'System update scheduled for 02:00 AM local time.', timestamp: '2025-06-19T08:30:00Z', read: false },
    { id: 'notif003', type: 'warning', message: 'Project "Urban Drone Network" is 3 days overdue.', timestamp: '2025-06-18T17:00:00Z', read: false },
    { id: 'notif004', type: 'success', message: 'Task "Develop secure API endpoint" completed by Cyber_Synth.', timestamp: '2025-06-18T10:15:00Z', read: true },
    { id: 'notif005', type: 'alert', message: 'URGENT: Server overload warning on Node 7. Investigate immediately.', timestamp: '2025-06-17T23:45:00Z', read: false },
    { id: 'notif006', type: 'info', message: 'New team member "Logic_Master" joined the Development unit.', timestamp: '2025-06-17T14:00:00Z', read: true },
    { id: 'notif007', type: 'success', message: 'Report "Q2 Financial Overview" generated successfully.', timestamp: '2025-06-16T09:00:00Z', read: true },
  ]);

  const [filterType, setFilterType] = useState('All');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const filteredNotifications = useMemo(() => {
    return notifications.filter(notif =>
      (filterType === 'All' || notif.type === filterType) &&
      (!showUnreadOnly || !notif.read)
    );
  }, [notifications, filterType, showUnreadOnly]);

  const markAsRead = (id) => {
    setNotifications(prevNotifs =>
      prevNotifs.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prevNotifs =>
      prevNotifs.filter(notif => notif.id !== id)
    );
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'alert': return 'text-red-400 border-red-700/50 bg-red-900/20';
      case 'warning': return 'text-yellow-400 border-yellow-700/50 bg-yellow-900/20';
      case 'info': return 'text-cyan-400 border-cyan-700/50 bg-cyan-900/20';
      case 'success': return 'text-lime-400 border-lime-700/50 bg-lime-900/20';
      default: return 'text-gray-300 border-zinc-700/50 bg-zinc-800/20';
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

        /* Border Animation for Notifications main content */
        @keyframes border-glow-notifications {
          0%, 100% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          33% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          66% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
        }
        .animate-border-glow-notifications {
            border: 2px solid;
            animation: border-glow-notifications 9s infinite alternate;
        }

        .toggle-checkbox:checked + .toggle-label {
            background-color: #00CED1; /* Cyan for ON */
        }
        .toggle-checkbox:checked + .toggle-label .toggle-circle {
            transform: translateX(1.5rem); /* Move 24px for a 48px width switch (1/2 width) */
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">NOTIFICATIONS // SYSTEM LOGS</h1>
        <div className="flex items-center space-x-4">
          {/* Filter Controls */}
          <select
            name="filterType"
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="alert">Alerts</option>
            <option value="warning">Warnings</option>
            <option value="info">Info</option>
            <option value="success">Success</option>
          </select>

          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only toggle-checkbox"
                checked={showUnreadOnly}
                onChange={() => setShowUnreadOnly(!showUnreadOnly)}
              />
              <div className="block bg-zinc-700 w-12 h-6 rounded-full toggle-label"></div>
              <div className="dot absolute left-1 top-1 bg-gray-400 w-4 h-4 rounded-full transition transform toggle-circle"></div>
            </div>
            <span className="ml-3 text-gray-300 text-sm">Unread Only</span>
          </label>
        </div>
      </header>

      {/* Notifications Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-notifications"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-notifications" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-notifications)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-notifications)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-notifications)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(notif => (
              <div
                key={notif.id}
                className={`p-6 rounded-lg shadow-xl border ${getNotificationColor(notif.type)}
                  ${notif.read ? 'opacity-70' : 'font-bold'}
                  hover:scale-[1.01] transition-transform duration-200 ease-in-out`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-lg uppercase ${getNotificationColor(notif.type).split(' ')[0]}`}>
                    {notif.type} // <span className="font-normal">{new Date(notif.timestamp).toLocaleString()}</span>
                  </span>
                  <div className="flex space-x-3">
                    {!notif.read && (
                      <button
                        onClick={() => markAsRead(notif.id)}
                        className="text-fuchsia-400 hover:text-fuchsia-600 transition-colors text-sm font-semibold"
                        title="Mark as Read"
                      >
                        MARK READ
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="text-red-400 hover:text-red-600 transition-colors text-sm font-semibold"
                      title="Delete Notification"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
                <p className="text-lg text-gray-200">{notif.message}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 italic p-8 bg-zinc-800 rounded-lg border border-zinc-700">
              No notifications match your current criteria. All systems nominal.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
