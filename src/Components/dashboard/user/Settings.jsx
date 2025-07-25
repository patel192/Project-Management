import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCog, FaBell, FaPalette, FaSave } from "react-icons/fa";
export const Settings = () => {
    const [settings, setSettings] = useState({
    username: "Muhammad",
    email: "muhammad@example.com",
    notifications: true,
    theme: "dark",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    // Save settings logic (API call)
    alert("Settings saved!");
  };
  return (
    <div className="min-h-screen bg-[#0A1029] p-10 text-[#91C8E4]">
      <motion.div
        className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl shadow-2xl border border-purple-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-purple-400 flex items-center gap-2 mb-8">
          <FaUserCog /> Settings
        </h1>

        {/* Account Settings */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2">
            Account Info
          </h2>
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={settings.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2">
            Preferences
          </h2>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <FaBell /> Enable Notifications
            </label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="h-5 w-5 accent-purple-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm flex items-center gap-2">
              <FaPalette /> Theme
            </label>
            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="cyberpunk">Cyberpunk</option>
            </select>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md shadow-lg transition"
        >
          <FaSave />
          Save Changes
        </motion.button>
      </motion.div>
    </div>
  )
}
