import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-gray-100 overflow-x-hidden">
      {/* Local Styles */}
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
        `}
      </style>

      {/* Navbar */}
      <nav className="bg-zinc-900 shadow-lg shadow-fuchsia-500/20 p-4 sticky top-0 z-10 border-b border-fuchsia-600/40">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold text-fuchsia-500 tracking-wider">
            PRO<span className="text-cyan-400">MANAGE</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {["Features", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-fuchsia-400 px-3 py-2 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                {item}
              </a>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold text-lg rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400">
              SIGN UP <span className="text-sm ml-1 text-cyan-200">// ACCESS GRANTED</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 bg-gradient-to-br from-zinc-900 to-gray-950 text-white text-center overflow-hidden border-b-4 border-fuchsia-600">
        <div className="absolute inset-0 z-0">
          <svg className="w-[200%] h-[200%] opacity-5" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#grid)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#grid)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Pikachu Placeholder */}
          <motion.img
            src="https://placehold.co/200x200/FFD700/000000?text=Pikachu"
            alt="Companion"
            className="mb-8 w-40 h-40 md:w-56 md:h-56 object-contain"
            variants={fadeInUp}
          />
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-fuchsia-400 drop-shadow-lg animate-pulse"
            variants={fadeInUp}
          >
            <span className="text-cyan-400">OPTIMIZE.</span> EXECUTE.<br /> <span className="text-fuchsia-400">DOMINATE.</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 text-gray-300 font-light"
            variants={fadeInUp}
          >
            Quantum-leap your productivity with <span className="text-cyan-400 font-semibold">ProManage</span>.
            Engineered for precision, built for the future.
          </motion.p>
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-black text-xl rounded-full shadow-lg hover:shadow-cyan-500/70 transform hover:scale-110 transition-all duration-300 border-2 border-cyan-400 uppercase tracking-widest"
            variants={fadeInUp}
          >
            INITIATE FREE TRIAL <span className="text-sm ml-2">// NOW</span>
          </motion.button>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900 border-b-4 border-cyan-600">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 className="text-5xl font-bold text-center mb-16 text-cyan-400 drop-shadow-md" variants={fadeInUp}>
            SYSTEM CAPABILITIES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "NEURAL TASKNET",
                icon: "📊",
                description: "Intuitive task orchestration for optimal resource allocation. Visualize data streams in real-time.",
                color: "fuchsia",
              },
              {
                title: "COLLECTIVE NEXUS",
                icon: "🤝",
                description: "Direct neural interface for team synchronization. Broadcast directives, share encrypted data.",
                color: "cyan",
              },
              {
                title: "DATA NEXUS ANALYTICS",
                icon: "🧠",
                description: "Predictive analytics and anomaly detection. Uncover hidden patterns in your project matrix.",
                color: "lime",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-zinc-800 p-8 rounded-lg shadow-xl shadow-${feature.color}-500/20 border-2 border-${feature.color}-600/50 transform transition hover:-translate-y-2 hover:shadow-${feature.color}-500/50`}
                variants={fadeInUp}
              >
                <div className={`text-${feature.color}-500 text-5xl text-center mb-4`}>{feature.icon}</div>
                <h3 className={`text-2xl font-bold text-${feature.color}-400 text-center mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-bl from-gray-950 to-zinc-900 text-white text-center border-t-4 border-fuchsia-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-fuchsia-400 drop-shadow-md">INITIATE PHASE ONE?</h2>
          <p className="text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-gray-300 font-light">
            Integrate <span className="text-cyan-400 font-semibold">ProManage</span> and upgrade your operational capabilities.
            The future of project execution awaits.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-black text-xl rounded-full shadow-lg hover:shadow-fuchsia-500/70 transform hover:scale-110 transition-all duration-300 border-2 border-fuchsia-400 uppercase tracking-widest">
            ACCESS PROTOCOL <span className="text-sm ml-2">// VERIFIED</span>
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400 text-center border-t-2 border-cyan-700">
        <div className="container mx-auto px-4">
          <p>&copy; 2077 ProManage. All protocols reserved.</p>
          <div className="mt-4 space-x-4 text-sm">
            <a href="#" className="hover:text-fuchsia-400 transition">Privacy Directive</a>
            <span>|</span>
            <a href="#" className="hover:text-fuchsia-400 transition">Terms of Service Protocol</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
