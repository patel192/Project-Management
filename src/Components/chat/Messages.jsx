import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Messages = ({ currentUser }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [projectUsers, setProjectUsers] = useState([]);
  const [taskUsers, setTaskUsers] = useState([]);
  const [userList, setUserList] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    fetchAllMessages();
    fetchProjectUsers();
    fetchTaskUsers();
    fetchAllUsers();
  }, []);

  const fetchAllMessages = async () => {
    try {
      const res = await axios.get('http://localhost:3000/messages');
      setAllMessages(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProjectUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/project/${projectId}`);
      setProjectUsers(res.data.data.teamMembers);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTaskUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/tasks/byproject/${projectId}`);
      const uniqueUsers = new Set();
      res.data.data.forEach(task => {
        if (task.assignedTo) uniqueUsers.add(task.assignedTo);
      });
      setTaskUsers(Array.from(uniqueUsers));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users');
      setUserList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendMessage = async () => {
    if (!selectedUser || !messageInput.trim()) return;
    try {
      await axios.post('http://localhost:3000/message', {
        sender: currentUser._id,
        receiver: selectedUser,
        content: messageInput,
      });
      setMessageInput('');
      fetchAllMessages();
    } catch (err) {
      console.error(err);
    }
  };

  const getUserDetails = (id) => {
    const user = userList.find(u => u._id === id);
    return user ? `${user.name} (${user.email})` : 'Unknown User';
  };

  return (
    <div className="min-h-screen p-4 bg-zinc-900 text-white font-mono">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Project Team Members</h3>
        <div className="flex flex-wrap gap-2">
          {projectUsers.map(id => (
            <span
              key={id}
              onClick={() => setSelectedUser(id)}
              className={`cursor-pointer px-3 py-1 rounded-full text-sm ${selectedUser === id ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              {getUserDetails(id)}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Users from Tasks</h3>
        <div className="flex flex-wrap gap-2">
          {taskUsers.map(id => (
            <span
              key={id}
              onClick={() => setSelectedUser(id)}
              className={`cursor-pointer px-3 py-1 rounded-full text-sm ${selectedUser === id ? 'bg-green-600' : 'bg-gray-700'}`}
            >
              {getUserDetails(id)}
            </span>
          ))}
        </div>
      </div>

      {selectedUser && (
        <div className="mb-6">
          <h3 className="text-md mb-2">Send message to <strong>{getUserDetails(selectedUser)}</strong></h3>
          <textarea
            rows="3"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="w-full p-2 text-black rounded mb-2"
            placeholder="Type your message..."
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-2">All Messages</h3>
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {allMessages.map((msg) => (
            <div
              key={msg._id}
              className="bg-gray-800 p-3 rounded shadow flex flex-col"
            >
              <span className="text-sm text-gray-400">
                From: {getUserDetails(msg.sender)} → To: {getUserDetails(msg.receiver)}
              </span>
              <span className="text-md mt-1">{msg.content}</span>
              <span className="text-xs text-gray-500 mt-1">{new Date(msg.createdAt).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
