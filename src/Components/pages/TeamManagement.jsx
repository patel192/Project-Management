
import React, { useState, useMemo } from 'react';

export const TeamManagement = () => {
    const [teamMembers, setTeamMembers] = useState([
    { id: 'usr001', name: 'Commander Hex', role: 'Project Lead', status: 'Online', assignedProjects: 3, avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 'usr002', name: 'Synth_Engineer', role: 'Developer', status: 'Online', assignedProjects: 2, avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 'usr003', name: 'Data_Analyst', role: 'Analyst', status: 'Offline', assignedProjects: 1, avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 'usr004', name: 'Ghost_Protocol', role: 'Security Expert', status: 'Online', assignedProjects: 1, avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 'usr005', name: 'Visual_Jockey', role: 'Designer', status: 'Busy', assignedProjects: 2, avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 'usr006', name: 'Logic_Master', role: 'Developer', status: 'Online', assignedProjects: 3, avatar: 'https://i.pravatar.cc/150?img=6' },
    { id: 'usr007', name: 'Law_Bot', role: 'Compliance Officer', status: 'Online', assignedProjects: 1, avatar: 'https://i.pravatar.cc/150?img=7' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  // Memoize filtered team members for performance
  const filteredMembers = useMemo(() => {
    return teamMembers.filter(member =>
      (searchTerm === '' ||
       member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       member.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterRole === 'All' || member.role === filterRole) &&
      (filterStatus === 'All' || member.status === filterStatus)
    );
  }, [teamMembers, searchTerm, filterRole, filterStatus]);

  const handleAddMember = () => {
    // Placeholder for adding a new member - normally would open a modal
    const newMember = {
      id: `usr${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      name: `New Recruit_${Math.floor(Math.random() * 100)}`,
      role: 'Unassigned',
      status: 'Offline',
      assignedProjects: 0,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    };
    setTeamMembers(prevMembers => [...prevMembers, newMember]);
    alert(`New member "${newMember.name}" added to the roster.`);
  };

  const getStatusIndicatorColor = (status) => {
    switch (status) {
      case 'Online': return 'bg-lime-500';
      case 'Offline': return 'bg-gray-500';
      case 'Busy': return 'bg-yellow-500';
      default: return 'bg-gray-400';
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

        /* Border Animation for Team Management main content */
        @keyframes border-glow-team {
          0%, 100% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
          33% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          66% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
        }
        .animate-border-glow-team {
            border: 2px solid;
            animation: border-glow-team 8s infinite alternate;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">TEAM ROSTER // OPERATIONAL ASSETS</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="SEARCH MEMBER / ROLE..."
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 w-48 md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="All">All Roles</option>
            <option value="Project Lead">Project Lead</option>
            <option value="Developer">Developer</option>
            <option value="Analyst">Analyst</option>
            <option value="Security Expert">Security Expert</option>
            <option value="Designer">Designer</option>
            <option value="Compliance Officer">Compliance Officer</option>
            <option value="Unassigned">Unassigned</option>
          </select>
          <select
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Busy">Busy</option>
          </select>
          <button
            onClick={handleAddMember}
            className="px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-sm"
          >
            + ADD MEMBER
          </button>
        </div>
      </header>

      {/* Team Members List */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-team"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-team" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-team)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-team)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-team)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div key={member.id} className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-fuchsia-500/40">
                <div className="relative mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500 shadow-lg shadow-cyan-500/30"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-zinc-800 ${getStatusIndicatorColor(member.status)}`}
                    title={member.status}
                  ></span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-1">{member.name}</h3>
                <p className="text-fuchsia-300 text-sm font-medium mb-3">{member.role}</p>
                <div className="text-gray-400 text-sm">
                  <p>Status: <span className={`${getStatusIndicatorColor(member.status) === 'bg-lime-500' ? 'text-lime-400' : getStatusIndicatorColor(member.status) === 'bg-yellow-500' ? 'text-yellow-400' : 'text-gray-400'}`}>{member.status}</span></p>
                  <p>Projects: <span className="font-semibold text-fuchsia-300">{member.assignedProjects}</span></p>
                </div>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 uppercase text-xs">
                  VIEW PROFILE
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 italic p-8">
              No team members found matching your criteria.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
