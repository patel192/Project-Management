import React from "react";

export const LandingPage = () => {
  return (
   <div className="min-h-screen bg-zinc-950 font-inter text-gray-100">
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }
        .animate-slide-diagonal-x-medium { animation: slide-diagonal-x 45s linear infinite; }
        .animate-slide-diagonal-x-reverse-medium { animation: slide-diagonal-x-reverse 45s linear infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 5s infinite alternate; }

        /* Animated Image specific animations */
        @keyframes image-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(5px) rotate(1deg); }
        }
        @keyframes image-pulse-glow {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 255, 0, 0.7)); } /* Yellow glow */
            50% { filter: drop-shadow(0 0 15px rgba(255, 215, 0, 1)); } /* Brighter yellow glow */
        }
        .animated-companion {
            animation: image-float 4s ease-in-out infinite, image-pulse-glow 3s ease-in-out infinite alternate;
        }

        /* Border Animation for Landing Page main container */
        @keyframes border-glow-landing {
          0%, 100% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          33% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          66% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
        }
        .animate-border-glow-landing {
            border: 2px solid;
            animation: border-glow-landing 6s infinite alternate;
        }
        `}
      </style>

      {/* Navbar */}
      <nav className="bg-zinc-900 shadow-lg shadow-fuchsia-500/20 p-4 sticky top-0 z-10 border-b border-fuchsia-600/40">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold text-fuchsia-500 tracking-wider">PRO<span className="text-cyan-400">MANAGE</span></a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-fuchsia-400 px-3 py-2 rounded-md transition-colors duration-200 text-lg font-medium">Features</a>
            <a href="#" className="text-gray-300 hover:text-fuchsia-400 px-3 py-2 rounded-md transition-colors duration-200 text-lg font-medium">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-fuchsia-400 px-3 py-2 rounded-md transition-colors duration-200 text-lg font-medium">Contact</a>
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold text-lg rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400">
              SIGN UP <span className="text-sm ml-1 text-cyan-200">{"// ACCESS GRANTED"}</span>
            </button>
          </div>
          {/* Mobile Menu Icon (Placeholder) */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-fuchsia-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 bg-gradient-to-br from-zinc-900 to-gray-950 text-white text-center overflow-hidden border-b-4 border-fuchsia-600">
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg className="w-[200%] h-[200%] opacity-5" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-landing" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-landing)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-landing)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-landing)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
          {/* Animated Image Companion (Pikachu Placeholder) */}
          <div className="mb-8 w-40 h-40 md:w-56 md:h-56 relative">
            <img
              src="https://placehold.co/200x200/FFD700/000000?text=Full%20Body%20Pikachu%20Placeholder" // Updated placeholder for full body
              alt="Pikachu Companion"
              className="w-full h-full object-contain animated-companion"
              // Fallback if image fails to load
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/CCCCCC/000000?text=Failed%20to%20Load"; }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-fuchsia-400 drop-shadow-lg shadow-fuchsia-500/50 [text-shadow:0_0_10px_var(--tw-shadow-color)] animate-pulse-slow">
            <span className="text-cyan-400">OPTIMIZE.</span> EXECUTE.<br/> <span className="text-fuchsia-400">DOMINATE.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 text-gray-300 font-light">
            Quantum-leap your productivity with <span className="text-cyan-400 font-semibold">ProManage</span>.
            Engineered for precision, built for the future.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-black text-xl rounded-full shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 transform hover:scale-110 transition-all duration-300 border-2 border-cyan-400 uppercase tracking-widest animate-fade-in">
            INITIATE FREE TRIAL <span className="text-sm ml-2">// NOW</span>
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900 border-b-4 border-cyan-600 animate-border-glow-landing"> {/* Apply border animation here */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 drop-shadow-md">SYSTEM CAPABILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-fuchsia-500/20 hover:shadow-fuchsia-500/50 transition-shadow duration-300 transform hover:-translate-y-2 border-2 border-fuchsia-600/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-gray-900 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-fuchsia-500 mb-6 flex justify-center">
                  <svg className="w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4 4m0 0l-4-4m4 4V8"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300 text-center">NEURAL TASKNET</h3>
                <p className="text-gray-300 text-center font-light">
                  Intuitive task orchestration for optimal resource allocation. Visualize data streams in real-time.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-shadow duration-300 transform hover:-translate-y-2 border-2 border-cyan-600/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-gray-900 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-cyan-500 mb-6 flex justify-center">
                  <svg className="w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2m20 0h-3V10a6 6 0 00-12 0v10M9 10a6 6 0 016 6v4H9m-7 0h14"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 group-hover:text-cyan-400 transition-colors duration-300 text-center">COLLECTIVE NEXUS</h3>
                <p className="text-gray-300 text-center font-light">
                  Direct neural interface for team synchronization. Broadcast directives, share encrypted data.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-lime-500/20 hover:shadow-lime-500/50 transition-shadow duration-300 transform hover:-translate-y-2 border-2 border-lime-600/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-gray-900 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-lime-500 mb-6 flex justify-center">
                  <svg className="w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-lime-400 transition-colors duration-300 text-center">DATA NEXUS ANALYTICS</h3>
                <p className="text-gray-300 text-center font-light">
                  Predictive analytics and anomaly detection. Uncover hidden patterns in your project matrix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-bl from-gray-950 to-zinc-900 text-white text-center border-t-4 border-fuchsia-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fuchsia-400 drop-shadow-md">INITIATE PHASE ONE?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-gray-300 font-light">
            Integrate <span className="text-cyan-400 font-semibold">ProManage</span> and upgrade your operational capabilities. The future of project execution awaits.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-black text-xl rounded-full shadow-lg shadow-fuchsia-500/40 hover:shadow-fuchsia-500/70 transform hover:scale-110 transition-all duration-300 border-2 border-fuchsia-400 uppercase tracking-widest animate-fade-in">
            ACCESS PROTOCOL <span className="text-sm ml-2">// VERIFIED</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400 text-center border-t-2 border-cyan-700">
        <div className="container mx-auto px-4">
          <p>&copy; 2077 ProManage. All protocols reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-fuchsia-400 transition-colors duration-200 text-sm">Privacy Directive</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-fuchsia-400 transition-colors duration-200 text-sm">Terms of Service Protocol</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
