import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiMenu } from "react-icons/fi"; // Hamburger icon

export const UserNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

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
      <div className="flex items-center gap-4">
        {/* Sidebar toggle */}
        <button
          onClick={toggleSidebar}
          className="text-2xl text-purple-500 hover:text-purple-400 transition"
        >
          <FiMenu />
        </button>
        <h1 className="text-xl font-bold text-purple-500">Chatify</h1>
      </div>

    <div
  className="flex items-center gap-4 relative"
  onMouseEnter={() => setMenuOpen(true)}
  onMouseLeave={() => setMenuOpen(false)}
>
  {user && (
    <>
      <span className="text-sm text-gray-400 hidden sm:inline">
        👋 {user.name}
      </span>
      <img
        src={user.profilePic || "https://via.placeholder.com/40"}
        alt="Profile"
        className="w-14 h-13 rounded-full cursor-pointer border-2 border-purple-600 hover:scale-105 transition"
      />
    </>
  )}

  {menuOpen && (
    <div className="absolute top-14 right-0 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg w-44 z-50">
      <ul className="py-2 text-sm text-white">
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            View profile
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Keyboard shortcuts
            <span className="text-xs text-gray-400"> ⌘K </span>
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Company profile
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Team
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Invite colleagues
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Changelog
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Slack Community
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Support
          </a>
        </li>
        <li>
          <a
            href="#0"
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5"
          >
            API
          </a>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-100 dark:hover:bg-red-500/10"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  )}
</div>

    </nav>
  );
};
