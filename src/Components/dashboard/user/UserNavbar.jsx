import React from 'react'
import { useNavigate } from 'react-router-dom'
export const UserNavbar = () => {
     const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
   <nav className="w-full bg-zinc-950 text-[#91C8E4] px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-500">Chatify</h1>
      <div className="flex items-center gap-6">
        <span className="text-sm text-gray-400">👋 {userName}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-white transition text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
