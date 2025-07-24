import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

const statusColors = {
  planning: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  completed: "bg-green-500",
};

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/projects`); // adjust to your actual API endpoint
        setProjects(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1029] text-[#D0E3FF] px-8 py-12 font-inter">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-12 tracking-wide animate-pulse">
        🚀 Project Control Center
      </h1>

      {projects.length === 0 ? (
        <p className="text-gray-500 text-lg italic">No projects available.</p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link to={`${project._id}`} key={project._id}>
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#1a1a3f] to-[#0f0f23] p-6 rounded-2xl shadow-xl border border-purple-800 hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0" />
                <div className="relative z-10">
                  {/* Project Name */}
                  <h2 className="text-2xl font-bold text-purple-300 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {project.name}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Created By */}
                  <p className="text-xs text-gray-400 mb-2 italic">
                    Created by:{" "}
                    <span className="text-[#9ED5FF]">
                      {project.createdBy.name}
                    </span>
                  </p>

                  {/* Date Info */}
                  <div className="flex justify-between text-xs text-gray-400 mb-3">
                    <span>
                      Start:{" "}
                      <span className="text-[#81D4FA]">
                        {dayjs(project.startDate).format("DD MMM YYYY")}
                      </span>
                    </span>
                    <span>
                      End:{" "}
                      <span className="text-[#F48FB1]">
                        {dayjs(project.endDate).format("DD MMM YYYY")}
                      </span>
                    </span>
                  </div>

                  {/* Status Pill */}
                  <span
                    className={`text-white text-xs px-3 py-1 rounded-full font-semibold ${
                      statusColors[project.status]
                    } mb-4 inline-block`}
                  >
                    {project.status}
                  </span>

                  {/* Team Members */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.teamMembers?.length > 0 ? (
                      project.teamMembers.map((member, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-600 via-fuchsia-700 to-blue-700 rounded-full shadow hover:brightness-110 transition duration-300"
                        >
                          {typeof member === "string" ? member : member.name}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-xs italic">
                        No members
                      </span>
                    )}
                  </div>

                  {/* Button (stop event from Link) */}
                  <div className="mt-5 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // ⛔ prevent Link navigation
                        e.preventDefault(); // ⛔ prevent <Link> default
                        navigate(`/dashboard/projecttasks/${project._id}`); // ✅ navigate to project tasks
                      }}
                      className="text-sm text-purple-200 group-hover:text-white font-medium flex items-center gap-1 transition-all duration-300 hover:gap-2"
                    >
                      View Tasks
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
