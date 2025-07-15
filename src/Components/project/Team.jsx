import React, { useEffect, useState } from "react";
import axios from "axios";

export const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await axios.get("http://localhost:3000/teams"); // Replace with your actual route
        setTeams(res.data.data);
      } catch (err) {
        console.error("Error fetching teams:", err.message);
      }
    };
    fetchTeams();
  }, []);
  return (
    <div className="min-h-screen bg-[#0B1D51] text-[#91C8E4] p-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-400">Teams</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div
            key={team._id}
            className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-purple-300 mb-2">
              {team.name}
            </h2>
            <p className="text-sm text-gray-300 mb-3">
              <span className="font-semibold text-purple-500">Created by:</span>{" "}
              {team.createdBy}
            </p>

            <h3 className="text-sm text-purple-500 font-semibold mb-1">
              Team Members:
            </h3>
            <ul className="list-disc list-inside text-white">
              {team.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
