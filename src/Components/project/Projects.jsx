import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch all projects from backend
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:3000/projects");
        setProjects(res.data.data); // Adjust if your API format is different
      } catch (err) {
        console.error("Error fetching projects:", err.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1D51] text-[#91C8E4] p-6">
      <h1 className="text-3xl font-bold mb-8 text-purple-400">
        Projects Overview
      </h1>
      {projects.length === 0 ? (
        <p className="text-gray-400">No projects found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link to={`${project._id}`} key={project._id}>
              <div className="bg-zinc-800 rounded-xl shadow-md p-6 hover:shadow-lg hover:ring-2 hover:ring-purple-600 transition duration-300 mb-6 cursor-pointer">
                <h2 className="text-xl font-bold text-purple-400 mb-2">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.teamMembers?.length > 0 ? (
                    project.teamMembers.map((member, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-purple-600 transition"
                      >
                        {member.name || member}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400 text-xs italic">
                      No members
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
