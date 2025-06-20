import React, { useState, useMemo, useEffect } from 'react';

function ProjectCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Mock Events for the Calendar
  const [events] = useState([
    { id: 'event001', date: '2025-06-25', title: 'Phase 1 Review - QNI', type: 'milestone', project: 'Quantum Nexus Initiative' },
    { id: 'event002', date: '2025-06-28', title: 'UI/UX Mockup Finalization', type: 'task', project: 'Neural Link Interface' },
    { id: 'event003', date: '2025-07-01', title: 'Server Migration Deadline', type: 'deadline', project: 'Urban Drone Network' },
    { id: 'event004', date: '2025-07-05', title: 'Team Sync Meeting', type: 'meeting', project: 'All Projects' },
    { id: 'event005', date: '2025-07-10', title: 'Security Audit Commencement', type: 'milestone', project: 'Automated Cyber-Defense' },
    { id: 'event006', date: '2025-06-20', title: 'Report Submission - Q2', type: 'task', project: 'Reports & Analytics' },
    { id: 'event007', date: '2025-06-20', title: 'Cyberpunk Theme Integration', type: 'task', project: 'UI/UX Refactor' },
  ]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 for Sunday, 6 for Saturday

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month); // Day of the week for the 1st of the month

  // Create an array representing the days of the month for rendering the grid
  const calendarDays = useMemo(() => {
    const daysArray = [];
    // Add empty placeholders for days before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      daysArray.push(null);
    }
    // Add actual days
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }
    return daysArray;
  }, [year, month, totalDays, startDay]);

  const getEventsForDay = (day) => {
    if (!day) return [];
    const formattedDay = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return events.filter(event => event.date === formattedDay);
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'milestone': return 'text-fuchsia-400'; // Pink/Purple for milestones
      case 'deadline': return 'text-red-400';      // Red for deadlines
      case 'task': return 'text-cyan-400';         // Cyan for tasks
      case 'meeting': return 'text-lime-400';      // Green for meetings
      default: return 'text-gray-300';
    }
  };

  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

        /* Border Animation for Calendar main content */
        @keyframes border-glow-calendar {
          0%, 100% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
          33% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          66% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
        }
        .animate-border-glow-calendar {
            border: 2px solid;
            animation: border-glow-calendar 9.5s infinite alternate;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">PROJECT CALENDAR // CHRONOS LOG</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={goToToday}
            className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 uppercase text-sm"
          >
            TODAY
          </button>
          <button
            onClick={goToPreviousMonth}
            className="p-2 bg-zinc-700 hover:bg-zinc-600 rounded-md text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <span className="text-xl font-bold text-cyan-400 min-w-[150px] text-center">
            {monthNames[month]} {year}
          </span>
          <button
            onClick={goToNextMonth}
            className="p-2 bg-zinc-700 hover:bg-zinc-600 rounded-md text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </header>

      {/* Calendar Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-calendar"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-calendar" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-calendar)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-calendar)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-calendar)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 bg-zinc-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
          <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">MONTHLY SCHEDULE // EVENT MATRIX</h2>

          <div className="grid grid-cols-7 gap-1 text-center font-bold text-fuchsia-300 mb-4">
            {dayNames.map(day => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => {
              const dayEvents = getEventsForDay(day);
              const isToday = day === new Date().getDate() &&
                              month === new Date().getMonth() &&
                              year === new Date().getFullYear();

              return (
                <div
                  key={index}
                  className={`min-h-[100px] p-2 rounded-md ${
                    day ? 'bg-zinc-700 hover:bg-zinc-600 transition-colors cursor-pointer' : 'bg-zinc-900/50'
                  } ${isToday ? 'border-2 border-lime-400 shadow-lg shadow-lime-500/30' : 'border border-zinc-600/50'}`}
                >
                  <div className={`font-semibold text-right mb-2 ${isToday ? 'text-lime-400' : 'text-gray-300'}`}>
                    {day}
                  </div>
                  <div className="text-left text-xs space-y-1">
                    {dayEvents.map(event => (
                      <div key={event.id} className={`px-2 py-1 rounded-sm text-white ${
                          event.type === 'milestone' ? 'bg-fuchsia-800/70' :
                          event.type === 'deadline' ? 'bg-red-800/70' :
                          event.type === 'task' ? 'bg-cyan-800/70' :
                          event.type === 'meeting' ? 'bg-lime-800/70' :
                          'bg-gray-800/70'
                        }`}
                        title={`${event.title} - ${event.project}`}
                      >
                        <span className={`text-shadow-sm ${getEventTypeColor(event.type)}`}>
                            {event.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectCalendar;
