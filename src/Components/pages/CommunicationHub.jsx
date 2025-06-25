import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const messagesMock = [
  { id: 1, text: "Welcome to the Cyberpunk Hub.", sender: "system" },
  { id: 2, text: "Hello Commander. Awaiting your instructions.", sender: "agent" },
];

export default function CommunicationHub() {
  const [messages, setMessages] = useState(messagesMock);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input, sender: "you" };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono p-4 flex items-center justify-center">
      <div className="w-full max-w-3xl h-[80vh] bg-white/5 backdrop-blur-lg border border-fuchsia-500/40 rounded-2xl shadow-lg p-6 relative overflow-hidden">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-400 animate-pulse"
        >
          CYBER COMMUNICATION HUB
        </motion.div>

        {/* Message Area */}
        <div className="mt-6 h-[70%] overflow-y-auto pr-2 custom-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`my-2 flex ${msg.sender === 'you' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`
                  px-4 py-2 rounded-lg max-w-xs break-words
                  ${msg.sender === 'you'
                    ? 'bg-cyan-600 text-white self-end animate-glow-cyan'
                    : msg.sender === 'system'
                    ? 'bg-gray-800 text-fuchsia-400 italic border border-fuchsia-500'
                    : 'bg-fuchsia-700 text-white animate-glow-fuchsia'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Field */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
          <input
            className="flex-1 px-4 py-2 bg-gray-900/80 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
            placeholder="Type your command..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white rounded-lg hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
