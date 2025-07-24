import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
const statusStyles = {
  pending: "bg-yellow-600",
  inprogress: "bg-blue-600",
  completed: "bg-green-600",
  blocked: "bg-red-600",
};
export const ProjectTasks = () => {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/tasks/${projectId}`);
        setTasks(res.data.data || []);
      } catch (err) {
        setError("Failed to load tasks. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [projectId]);

  if (loading)
    return (
      <div className="text-center text-purple-300 mt-10">Loading tasks...</div>
    );
  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  return (
    <motion.div
    className="min-h-screen bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease:"easeOut" }}>
      <div className="min-h-screen bg-[#0f0f23] text-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-300 text-center">
          Project Tasks
        </h1>

        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">
            No tasks found for this project.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-gradient-to-br from-[#1a1a3f] to-[#181829] p-5 rounded-xl border border-purple-800 hover:shadow-purple-900/30 hover:scale-[1.02] transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-purple-200 mb-2">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-300 line-clamp-3 mb-3">
                  {task.description}
                </p>

                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>
                    Assigned To:{" "}
                    <span className="text-[#9ED5FF] font-medium">
                      {task.assignedTo?.name || "Unassigned"}
                    </span>
                  </span>
                </div>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    statusStyles[task.status] || "bg-gray-600"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
