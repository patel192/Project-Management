import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Team = () => {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchTeams();
    fetchAllUsers();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await axios.get("http://localhost:3000/teams");
      setTeams(res.data.data);
    } catch (err) {
      console.error("Error fetching teams:", err.message);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users"); // Adjust based on your route
      setAllUsers(res.data.data);
    } catch (err) {
      console.error("Error fetching users:", err.message);
    }
  };

  const handleCreateTeam = async () => {
    try {
      const payload = {
        name: teamName,
        members: selectedMembers,
        createdBy: localStorage.getItem("userName"), // Replace with current user logic
      };

      const res = await axios.post("http://localhost:3000/team", payload);
      setShowModal(false);
      setTeamName("");
      setSelectedMembers([]);
      fetchTeams(); // Refresh list
    } catch (err) {
      console.error("Error creating team:", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1029] text-[#91C8E4] p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-400">Teams</h1>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          + Add Team
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Link to={`${team._id}`} key={team._id}>
            <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-purple-300 mb-2">
                {team.name}
              </h2>
              <p className="text-sm text-gray-300 mb-3">
                <span className="font-semibold text-purple-500">
                  Created by:
                </span>{" "}
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
          </Link>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-md">
            <h2 className="text-xl text-purple-400 font-bold mb-4">
              Create New Team
            </h2>
            <input
              type="text"
              placeholder="Team Name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-zinc-800 text-white"
            />
            <label className="text-purple-300 font-semibold mb-2 block">
              Add Members:
            </label>
            <div className="max-h-40 overflow-y-auto border border-zinc-700 rounded mb-4 p-2">
              {allUsers.map((user) => (
                <div key={user._id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(user.name)}
                    onChange={() => {
                      setSelectedMembers((prev) =>
                        prev.includes(user.name)
                          ? prev.filter((m) => m !== user.name)
                          : [...prev, user.name]
                      );
                    }}
                    className="mr-2"
                  />
                  <span>{user.name}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 px-4 py-2 rounded text-white hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTeam}
                className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
