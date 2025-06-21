import React, { useState, useEffect, useRef } from 'react';

function CommunicationHub() {
  // Mock Messages Data
  const [messages, setMessages] = useState([
    { id: 'msg001', sender: 'Commander Hex', time: '10:05 AM', text: 'Team, daily stand-up initiated. Any critical updates on QNI Phase 3?' },
    { id: 'msg002', sender: 'Synth_Engineer', time: '10:07 AM', text: 'API endpoint development on schedule. Testing initiated for secure data sync.' },
    { id: 'msg003', sender: 'Visual_Jockey', time: '10:09 AM', text: 'Wireframes for Neural Link dashboard are 80% complete. Ready for review by 14:00.' },
    { id: 'msg004', sender: 'Ghost_Protocol', time: '10:11 AM', text: 'Encountered unexpected firewall. Initiating bypass protocols on Sector Gamma.' },
    { id: 'msg005', sender: 'Commander Hex', time: '10:15 AM', text: 'Acknowledged, Ghost_Protocol. Prioritize bypass. Synth_Engineer, keep an eye on resource allocation during testing.' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null); // Ref to scroll to the latest message

  // Simulate automatic scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const sender = 'Current_User'; // This would be dynamically determined in a real app
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const newMsg = {
      id: `msg${Date.now()}`,
      sender: sender,
      time: timeString,
      text: newMessage.trim(),
    };

    setMessages(prevMessages => [...prevMessages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-gray-100 flex flex-col">
      {/* Local Styles for Animations */}
      <style>
        {`
        @keyframes slide-diagonal-x {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-100%) translateY(-100%); }
        }
        @keyframes slide-diagonal-x-reverse {
          0% { transform: translateX(-100%) translateY(-100%); }
          100% { transform: translateX(0) translateY(0); }
        }
        .animate-slide-diagonal-x-medium { animation: slide-diagonal-x 45s linear infinite; }
        .animate-slide-diagonal-x-reverse-medium { animation: slide-diagonal-x-reverse 45s linear infinite; }

        /* Border Animation for Communication Hub main content */
        @keyframes border-glow-comms {
          0%, 100% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          33% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          66% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
        }
        .animate-border-glow-comms {
            border: 2px solid;
            animation: border-glow-comms 11s infinite alternate;
        }

        .message-bubble {
            max-width: 75%;
            word-wrap: break-word;
        }
        .message-bubble.sent {
            background-color: #00CED1; /* Cyan for sent messages */
            color: #1a202c; /* Dark text for contrast */
            border-bottom-right-radius: 0;
            margin-left: auto;
        }
        .message-bubble.received {
            background-color: #F06292; /* Fuchsia for received messages */
            color: #1a202c; /* Dark text for contrast */
            border-bottom-left-radius: 0;
            margin-right: auto;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">COMMUNICATION HUB // LOGGED COMMUNIQUE</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">ACTIVE CHANNELS: <span className="text-cyan-400">PROJECT_ALPHA // GENERAL</span></span>
        </div>
      </header>

      {/* Communication Content */}
      <main className="flex-1 flex flex-col p-8 bg-zinc-950 relative animate-border-glow-comms"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-comms" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-comms)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-comms)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-comms)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto space-y-4 pr-4 custom-scrollbar">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'Current_User' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`message-bubble p-3 rounded-lg shadow-md
                  ${msg.sender === 'Current_User' ? 'sent' : 'received'}
                  ${msg.sender === 'Current_User' ? 'rounded-br-none' : 'rounded-bl-none'}
                  border-2 ${msg.sender === 'Current_User' ? 'border-cyan-500' : 'border-fuchsia-500'}`}
              >
                <p className={`font-bold text-sm mb-1 ${msg.sender === 'Current_User' ? 'text-zinc-900' : 'text-zinc-900'}`}>
                  {msg.sender === 'Current_User' ? 'YOU // OPERATOR' : msg.sender.toUpperCase()}
                </p>
                <p className="text-gray-900 text-base">{msg.text}</p>
                <p className="text-right text-xs text-gray-700 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* For auto-scrolling */}
        </div>

        {/* Message Input Area */}
        <div className="relative z-10 mt-6 bg-zinc-800 p-4 rounded-lg shadow-xl shadow-lime-500/10 border border-lime-700/50">
          <form onSubmit={handleSendMessage} className="flex space-x-3">
            <input
              type="text"
              className="flex-1 p-3 bg-zinc-700 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 placeholder-gray-500"
              placeholder="TRANSMIT MESSAGE //..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-lime-600 to-green-700 text-white font-bold rounded-md shadow-lg shadow-lime-500/30 hover:shadow-lime-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-lime-400 uppercase text-sm"
            >
              SEND // {'>'} {/* FIX: Escaped the '>' character */}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CommunicationHub;