import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const bottomRef = useRef(null);

  // Fetch all messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/messages");
      setMessages(res.data.data);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  // Fetch all users (to show sender names)
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
    fetchUsers();

    const interval = setInterval(() => {
      fetchMessages();
    }, 3000); // auto-refresh every 3s

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom when new messages appear
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 const handleSend = async () => {
  if (!newMessage.trim()) return;

  const messageData = {
    sender: userId,         // Ensure this is a valid MongoDB ObjectId string
    receiver: selectedUser._id, // Also a valid ID
    content: newMessage,
    project: null,          // Optional: pass projectId if exists
    task: null              // Optional: pass taskId if exists
  };

  try {
    const res = await axios.post("http://localhost:3000/message", messageData);
    setMessages([...messages, res.data]);
    setNewMessage("");
  } catch (err) {
    console.error("Error sending message:", err);
  }
};


  const getUserName = (id) => {
    const user = users.find((u) => u._id === id);
    return user ? user.name || user.email : "Unknown";
  };
  return (
     <div className="w-full h-[90vh] bg-zinc-900 text-white flex flex-col rounded-xl shadow-md border border-zinc-700 p-4">
      <h2 className="text-xl font-bold mb-4 border-b border-zinc-700 pb-2">📢 Group Chat</h2>

      <div className="flex-1 overflow-y-auto space-y-2 px-4 py-2">
  {Array.isArray(messages) && messages.map((msg, index) => (
    <div
      key={index}
      className={`p-3 rounded-xl max-w-xs ${
        msg.sender?._id === userId
          ? "bg-blue-500 text-white self-end ml-auto"
          : "bg-gray-800 text-gray-200 self-start"
      }`}
    >
      <div className="text-sm font-semibold">
        {msg.sender?.name || "Unknown"}:
      </div>
      <div>{msg.content}</div>
    </div>
  ))}
</div>


      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-zinc-800 border border-zinc-600 outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  )
}
