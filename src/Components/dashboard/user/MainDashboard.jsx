import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaTasks, FaUsers, FaCalendarAlt, FaComments, FaCog,FaBook,FaChalkboardTeacher  } from "react-icons/fa";

export const MainDashboard = () => {
    const navigate = useNavigate();

  const navItems = [
    { icon: <FaProjectDiagram />, label: "Projects", path: "projects", color: "from-purple-500 to-pink-500" },
    { icon: <FaTasks />, label: "Tasks", path: "tasks", color: "from-blue-500 to-cyan-500" },
    { icon: <FaUsers />, label: "My Team", path: "teams", color: "from-green-400 to-emerald-500" },
    { icon: <FaCalendarAlt />, label: "Calendar", path: "calendar", color: "from-yellow-400 to-orange-500" },
    { icon: <FaCog />, label: "Settings", path: "settings", color: "from-gray-600 to-gray-800" },
  ];

  const recentActivities = [
    { title: "Updated Task: UI Redesign", time: "10 mins ago", user: "Muhammad" },
    { title: "New Project Created: AI Bot", time: "1 hour ago", user: "Yash" },
    { title: "Message Sent to Team Alpha", time: "Today", user: "Anjali" },
    { title: "Task Completed: Backend Integration", time: "Yesterday", user: "Raj" },
  ];
  return (
 <div className="p-6 space-y-10 text-white bg-[#0f0f23] min-h-screen">
      {/* Greeting */}
      <div className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4">
        Welcome back, <span className="text-blue-400">Muhammad</span>! 🚀
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {navItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className={`cursor-pointer bg-gradient-to-br ${item.color} p-6 rounded-xl shadow-lg hover:shadow-purple-800/30 transition`}
            onClick={() => navigate(item.path)}
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.label}</h3>
          </motion.div>
        ))}
      </div>

      {/* Timeline Overview Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {/* Announcements */}
        <div className="bg-[#202040] p-6 rounded-xl border border-purple-700 shadow">
          <h2 className="text-xl font-bold mb-4 text-purple-300">📢 Announcements</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>🎯 New OKRs for Q3 have been released.</li>
            <li>🛠️ System maintenance scheduled on Friday.</li>
            <li>🎉 Congratulations to Team Phoenix for project completion!</li>
          </ul>
        </div>
        </div>

      {/* Team Collaboration Snapshot */}
      <div className="bg-gradient-to-br from-[#111133] to-[#1b1b2e] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-purple-300 mb-4">👥 Team Collaboration</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Yash", "Anjali", "Raj", "Priya"].map((member, i) => (
            <div
              key={i}
              className="p-4 bg-zinc-900 rounded-md hover:bg-purple-700 transition shadow-inner"
            >
              <p className="text-lg font-bold text-blue-400">{member}</p>
              <p className="text-sm text-gray-400">Active Today</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities Feed */}
      <div className="bg-gradient-to-br from-[#1a1a3f] to-[#111122] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-purple-300 mb-4">🕒 Activity Feed</h2>
        <div className="space-y-3">
          {recentActivities.map((activity, i) => (
            <div
              key={i}
              className="p-3 bg-zinc-800 rounded-md hover:bg-purple-800 transition"
            >
              <p className="font-medium text-blue-300">{activity.title}</p>
              <p className="text-sm text-gray-400">{activity.time} · by {activity.user}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Focus Section */}
      <div className="bg-gradient-to-br from-[#202040] to-[#2a2a50] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-purple-300 mb-4">🎯 Daily Focus</h2>
        <p className="text-gray-300 text-sm mb-2">
          Stay productive today. Here’s your focus list:
        </p>
        <ul className="list-disc ml-6 space-y-1 text-sm text-gray-200">
          <li>Complete dashboard analytics card</li>
          <li>Push project update to GitHub</li>
          <li>Finalize calendar sync feature</li>
          <li>Send report to project manager</li>
        </ul>
      </div>
       <div className="bg-[#1a1a3d] mt-10 p-6 rounded-xl border border-purple-800 shadow">
        <h2 className="text-xl font-semibold text-purple-300 mb-4">📚 Learning Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/dashboard/help"
            className="bg-[#292954] hover:bg-[#33336d] p-4 rounded-lg shadow transition flex items-center gap-4"
          >
            <FaBook className="text-purple-400 text-lg" />
            <span className="text-sm text-gray-200 font-medium">Read Documentation</span>
          </Link>
          <Link
            to="/dashboard/help"
            className="bg-[#292954] hover:bg-[#33336d] p-4 rounded-lg shadow transition flex items-center gap-4"
          >
            <FaChalkboardTeacher className="text-purple-400 text-lg" />
            <span className="text-sm text-gray-200 font-medium">Watch Tutorials</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
