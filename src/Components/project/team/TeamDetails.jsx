import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/team/${id}`);
        setTeam(res.data.data);
        setSelectedMembers(res.data.data.members || []);
        setLoading(false);
      } catch (err) {
        console.error("Error Fetching Team", err);
      }
    };
    fetchTeam();
  }, [id]);

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users');
      setAllUsers(res.data.data || []);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const handleEditTeam = () => {
    setIsEditing(true);
    fetchAllUsers();
  };

  const handleToggleMember = (userId) => {
    if (selectedMembers.includes(userId)) {
      setSelectedMembers(prev => prev.filter(id => id !== userId));
    } else {
      setSelectedMembers(prev => [...prev, userId]);
    }
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/team/${id}`, {
        members: selectedMembers,
      });
      setTeam(res.data.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving members", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!team) return <div>Team Not Found.</div>;

  return (
    <div className="min-h-screen bg-[#0B1D51] text-[#91C8E4] p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">{team.name}</h1>
      <p className="mb-4 text-gray-300">{team.description}</p>

      <div className="mb-4">
        <span className="font-semibold text-white">Created By:</span>{" "}
        {team?.createdBy || "Unknown"}
      </div>

      <div className="mb-6">
        <span className="font-semibold text-white">Created At:</span>{" "}
        {new Date(team.createdAt).toLocaleDateString()}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-purple-300 mb-2">Team Members</h2>
        <div className="flex flex-wrap gap-3">
          {team.members && team.members.length > 0 ? (
            team.members.map((member, idx) => (
              <span
                key={idx}
                className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition"
              >
                {typeof member === "object" ? member.name : member}
              </span>
            ))
          ) : (
            <p className="text-gray-400">No members in this team.</p>
          )}
        </div>

        <button
          className="inline-block bg-blue-900 px-4 py-3 rounded mt-4 hover:bg-blue-800"
          onClick={handleEditTeam}
        >
          Edit Members
        </button>
      </div>

      {/* Member Selection Modal */}
      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#0F3460] p-6 rounded-lg w-[90%] max-w-md text-white">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Select Team Members</h3>
            <div className="max-h-64 overflow-y-auto mb-4 space-y-2">
              {allUsers.map((user) => (
                <div key={user._id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`user-${user._id}`}
                    checked={selectedMembers.includes(user._id)}
                    onChange={() => handleToggleMember(user._id)}
                  />
                  <label htmlFor={`user-${user._id}`} className="text-sm">
                    {user.name} ({user.email})
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
