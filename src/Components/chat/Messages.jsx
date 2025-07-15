import React, { useState } from "react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export const Messages = () => {
  const [selectedUser, setSelectedUser] = useState("Muhammad");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState({
    Muhammad: [
      { from: "you", text: "Hey Muhammad!" },
      { from: "Muhammad", text: "Hey! What's up?" }
    ],
    Rohan: [
      { from: "you", text: "Hi Rohan!" },
      { from: "Rohan", text: "Hello!" }
    ]
  });

  const users = Object.keys(messages);

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const newMsg = { from: "you", text: messageInput };
    setMessages((prev) => ({
      ...prev,
      [selectedUser]: [...prev[selectedUser], newMsg]
    }));
    setMessageInput("");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#91C8E4] overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-72 bg-[#0B1D51]/90 backdrop-blur-md p-6 border-r border-purple-900 shadow-2xl">
        <h2 className="text-xl font-bold text-purple-400 mb-4 tracking-wide">
          Conversations
        </h2>
        <div className="space-y-3">
          {users.map((user) => (
            <motion.div
              key={user}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer shadow transition ${
                selectedUser === user
                  ? "bg-purple-700 text-white"
                  : "hover:bg-zinc-800"
              }`}
            >
              <FaUserCircle className="text-xl" />
              <span className="text-sm font-medium">{user}</span>
            </motion.div>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <div className="flex flex-col flex-1 relative bg-[#0B1D51]/80 backdrop-blur-sm">
        {/* Header */}
        <header className="sticky top-0 px-8 py-5 bg-zinc-950/70 border-b border-zinc-700 z-10">
          <h2 className="text-2xl font-semibold text-purple-300">
            Chat with {selectedUser}
          </h2>
        </header>

        {/* Message Display */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {messages[selectedUser]?.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`max-w-lg px-5 py-3 rounded-xl shadow-md ${
                msg.from === "you"
                  ? "bg-purple-600 text-white self-end ml-auto"
                  : "bg-zinc-800 text-[#91C8E4] self-start"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Input Box */}
        <footer className="px-6 py-4 bg-zinc-950 border-t border-zinc-700 flex items-center gap-3 sticky bottom-0 z-10">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            onClick={sendMessage}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition shadow-lg"
          >
            <FaPaperPlane />
          </button>
        </footer>
      </div>
    </div>
  );
};
