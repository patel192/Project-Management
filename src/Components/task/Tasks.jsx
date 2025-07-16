import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaClock, FaUser, FaFlag, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const Tasks = () => {
   const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tasks");
      setTasks(res.data.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-yellow-500";
      case "in-progress":
        return "bg-blue-500";
      case "done":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "low":
        return "bg-green-600";
      case "medium":
        return "bg-yellow-600";
      case "high":
        return "bg-orange-600";
      case "urgent":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };
  return (
    <div className="min-h-screen px-6 py-10 bg-[#0B1D51] text-[#91C8E4]">
      <h1 className="text-3xl font-bold mb-8 text-purple-400 flex items-center gap-2">
        <FaTasks /> Task Manager
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <Link to={`${task._id}`}>
          <div
            key={task._id}
            className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-6 hover:shadow-purple-700/50 transition duration-300"
          >
            <h2 className="text-xl font-bold text-white mb-2">{task.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{task.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getStatusColor(task.status)} text-white`}>
                {task.status}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getPriorityColor(task.priority)} text-white`}>
                Priority: {task.priority}
              </span>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <p><FaUser className="inline mr-2 text-purple-400" />Assigned To: {task.assignedTo}</p>
              <p><FaUser className="inline mr-2 text-purple-400" />Assigned By: {task.AssignedBy}</p>
              <p><FaClock className="inline mr-2 text-purple-400" />Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
