import React from 'react'
import { NavLink } from "react-router-dom";
import { FaComments, FaUserFriends, FaCog } from "react-icons/fa";
export const UserSidebar = () => {
    
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-[#91C8E4] p-6 shadow-md">
      <nav className="space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition ${
              isActive ? "bg-purple-700 text-white" : "hover:bg-zinc-800"
            }`
          }
        >
          <FaComments className="inline-block mr-2" />
          Dashboard
        </NavLink>

        <NavLink
          to="/chats"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition ${
              isActive ? "bg-purple-700 text-white" : "hover:bg-zinc-800"
            }`
          }
        >
          <FaUserFriends className="inline-block mr-2" />
          Chats
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition ${
              isActive ? "bg-purple-700 text-white" : "hover:bg-zinc-800"
            }`
          }
        >
          <FaCog className="inline-block mr-2" />
          Settings
        </NavLink>
      </nav>
    </aside>
  )
}
