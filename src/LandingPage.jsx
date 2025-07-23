import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1D51] text-[#91C8E4] font-sans">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center shadow-lg bg-gradient-to-b from-purple-700 to-blue-900 z-10">
        <div className="flex items-center space-x-3">
          <img
            src="src\assets\chatify-logo.jpg"
            alt="Chatify Logo"
            className="h-12 w-12 rounded-md object-cover border border-purple-500 shadow-md"
          />
          <h1 className="text-2xl font-bold text-purple-300">Chatify</h1>
        </div>

        <nav className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-md border border-purple-500 text-sm font-medium hover:bg-[#8CCDEB] hover:text-[#0B1D51] transition-all duration-300 delay-100"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 rounded-md border border-purple-500 text-sm font-medium hover:bg-[#8CCDEB] hover:text-[#0B1D51] transition-all duration-300 delay-100"
          >
            Register
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12 md:py-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-400 drop-shadow mb-6 leading-tight">
          Connect. Chat. Collaborate.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-purple-200 mb-10">
          Real-time messaging for teams, friends, and everyone in between — fast, simple, and secure.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-800 hover:from-purple-800 hover:to-blue-900 rounded-full text-white text-lg font-semibold shadow-md transition-all duration-300 delay-150"
        >
          Get Started
        </button>
      </main>

      {/* Features Section */}
      <section className="px-6 py-16 bg-[#0C2556] text-center border-t border-purple-800">
        <h3 className="text-3xl md:text-4xl font-bold text-purple-300 mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#0F3460] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-purple-700">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">Instant Messaging</h4>
            <p className="text-sm text-purple-100">Send and receive messages in real-time with zero delays across all devices.</p>
          </div>
          <div className="bg-[#0F3460] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-purple-700">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">Secure Communication</h4>
            <p className="text-sm text-purple-100">All messages are encrypted and securely transmitted to protect your privacy.</p>
          </div>
          <div className="bg-[#0F3460] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-purple-700">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">Group Chat Support</h4>
            <p className="text-sm text-purple-100">Create and join group chats to collaborate with friends, teams, or communities.</p>
          </div>
          <div className="bg-[#0F3460] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-purple-700">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">User Profiles</h4>
            <p className="text-sm text-purple-100">Customize your profile, avatar, and settings to express your personality.</p>
          </div>
          <div className="bg-[#0F3460] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-purple-700">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">Notifications</h4>
            <p className="text-sm text-purple-100">Stay up to date with in-app and browser notifications for new messages.</p>
          </div>
          <div className="bg-[#0F3460] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-purple-700">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">Responsive Design</h4>
            <p className="text-sm text-purple-100">Fully responsive interface optimized for desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-400 border-t border-zinc-700 bg-[#0B1D51]">
        © {new Date().getFullYear()} Chatify. All rights reserved.
      </footer>
    </div>
  );
};
