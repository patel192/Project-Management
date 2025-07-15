import React, { useState } from 'react';
import { UserNavbar } from './UserNavbar';
import { UserSidebar } from './UserSidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

export const UserDashBoard = () => {
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
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sticky top-0 z-20"
          >
            <UserSidebar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col min-h-screen">
        <UserNavbar toggleSidebar={toggleSidebar} />
        <main className="p-6 bg-[#0B1D51] flex-1 text-[#91C8E4]">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};
