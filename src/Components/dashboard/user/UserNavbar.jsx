import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const UserNavbar = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Fetch user data from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/user/${userId}`);
        setUser(res.data.data);
      } catch (err) {
        console.error("Failed to fetch user:", err.message);
      }
    };
    if (userId) fetchUser();
  }, [userId]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-zinc-950 text-[#91C8E4] px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-500">Chatify</h1>

      <div className="flex items-center gap-4 relative" ref={menuRef}>
        {user && (
          <>
            <span className="text-sm text-gray-400">👋 {user.name}</span>
            <img
              src={user.profilePic || "https://via.placeholder.com/40"}
              alt="Profile"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-14 h-13 rounded-full cursor-pointer border-2 border-purple-600 hover:scale-105 transition"
            />
          </>
        )}

        {menuOpen && (
          <div className="absolute top-14 right-0 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg w-44 z-50">
            <ul className="py-2 text-sm text-white">
              <li
                className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
              >
                View Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"
                onClick={() => {
                  navigate("/settings");
                  setMenuOpen(false);
                }}
              >
                Settings
              </li>
              <li
                className="px-4 py-2 text-red-400 hover:bg-zinc-700 hover:text-red-300 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
