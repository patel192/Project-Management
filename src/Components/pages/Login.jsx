import React from 'react'
import { useState } from 'react';
export const Login = () => {
    const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setMessageType('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setMessage('ERROR: Neural Link ID and Passkey are required.');
      setMessageType('error');
      return;
    }

    console.log('Login Attempt:', formData);
    // Simulate API call
    setTimeout(() => {
      // In a real application, you would send this data to your backend for authentication.
      // Example: apiService.login(formData.email, formData.password)
      //   .then(response => {
      //     setMessage('ACCESS GRANTED. Initiating system synchronization...');
      //     setMessageType('success');
      //     // Redirect to dashboard
      //   })
      //   .catch(error => {
      //     setMessage('ERROR: Invalid credentials. Re-enter Neural Link ID and Passkey.');
      //     setMessageType('error');
      //     console.error('Login error:', error);
      //   });

      // For demonstration: Assume successful login
      setMessage('ACCESS GRANTED. Initiating system synchronization...');
      setMessageType('success');
      setFormData({ email: '', password: '' }); // Clear form on success
    }, 1500);
  };
  return (
     <div className="min-h-screen flex items-center justify-center bg-zinc-950 font-inter text-gray-100 p-4">
      <div className="max-w-md w-full bg-zinc-900 p-8 rounded-lg shadow-xl shadow-cyan-500/20 border-2 border-cyan-600/50 relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="diagonal-lines-login" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M-5,5 l10,-10 M0,20 l20,-20 M15,25 l10,-10" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines-login)" className="text-fuchsia-500"/>
          </svg>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-cyan-500 text-center mb-8 tracking-wider">
            LOGIN // AUTHENTICATION PROTOCOL
          </h1>

          {message && (
            <div className={`mb-6 p-4 rounded-md text-center text-lg font-semibold ${
              messageType === 'success' ? 'bg-green-700 text-green-200 border border-green-500' :
              'bg-red-700 text-red-200 border border-red-500'
            } shadow-md`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">NEURAL LINK ID (EMAIL)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-zinc-800 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 placeholder-gray-500"
                placeholder="Enter your registered email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">PASSKEY</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 bg-zinc-800 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 placeholder-gray-500"
                placeholder="Enter your passkey"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-cyan-400 uppercase text-lg"
            >
              ACCESS SYSTEM
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-sm">
            No account? <a href="/register" className="text-fuchsia-400 hover:underline">INITIATE REGISTRATION</a>
          </p>
        </div>
      </div>
    </div>
  )
}
