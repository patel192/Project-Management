import React from "react";
import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="min-h-screen bg-[#0B1D51] text-[#91C8E4] flex flex-col">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-[#0B1D51]">
        {/* Logo Box */}
        <div className="flex items-center space-x-2">
          <img
            src="src\assets\chatify-logo.jpg"
            alt="Chatify Logo"
            className="h-10 w-10 rounded-md object-cover border border-purple-700"
          />
          <h1 className="text-xl font-bold text-purple-400">Chatify</h1>
        </div>

        <nav className="space-x-4">
          <button
            className="px-4 py-2 rounded-md border border-purple-700 hover:bg-[#8CCDEB] transition hover:text-[#0B1D51]"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-4 py-2 rounded-md border border-purple-700 hover:bg-[#8CCDEB] transition hover:text-[#0B1D51]"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-4">
          Connect. Chat. Collaborate.
        </h2>
        <p className="text-lg md:text-xl max-w-xl text-purple-700 mb-8">
          Real-time messaging for teams, friends, and everyone in between — fast, simple, and secure.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-medium transition"
        >
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Chatify. All rights reserved.
      </footer>
    </div>
    </>
  );
};
