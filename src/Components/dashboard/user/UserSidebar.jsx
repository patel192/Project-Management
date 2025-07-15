import React, { useState } from 'react';
import { UserNavbar } from './UserNavbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaProjectDiagram,
  FaTasks,
  FaUsers,
  FaChartBar,
  FaCalendarAlt,
  FaComments,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const UserSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-[#91C8E4] p-6 shadow-md">
      <nav className="space-y-4">
        <SidebarLink to="/dashboard" icon={<FaProjectDiagram />} label="Dashboard" />
        <SidebarLink to="/dashboard/projects" icon={<FaTasks />} label="Projects" />
        <SidebarLink to="/teams" icon={<FaUsers />} label="Teams" />
        <SidebarLink to="/tasks" icon={<FaChartBar />} label="Tasks" />
        <SidebarLink to="/calendar" icon={<FaCalendarAlt />} label="Calendar" />
        <SidebarLink to="/messages" icon={<FaComments />} label="Messages" />
        <SidebarLink to="/settings" icon={<FaCog />} label="Settings" />
        <SidebarLink to="/help" icon={<FaQuestionCircle />} label="Help & Support" />
        <SidebarLink to="/logout" icon={<FaSignOutAlt />} label="Logout" />
      </nav>
    </aside>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded transition duration-200 ease-in-out text-sm font-medium ${
        isActive ? 'bg-purple-700 text-white' : 'hover:bg-zinc-800'
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);

export const UserDashBoard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex">
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="sticky top-0 z-20"
          >
            <UserSidebar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col min-h-screen">
        <UserNavbar toggleSidebar={toggleSidebar} />
        <main className="p-6 bg-[#0B1D51] flex-1 text-[#91C8E4]">
          {children}
        </main>
      </div>
    </div>
  );
};
