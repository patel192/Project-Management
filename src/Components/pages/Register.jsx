import React from 'react'
import { useState } from 'react';
export const Register = () => {
     const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      setMessage('ERROR: Passkeys do not match. Re-enter credentials.');
      setMessageType('error');
      return;
    }

    if (formData.password.length < 6) {
      setMessage('ERROR: Passkey must be at least 6 characters. Stronger encryption advised.');
      setMessageType('error');
      return;
    }

    console.log('Registration Attempt:', formData);
    // Simulate API call
    setTimeout(() => {
      setMessage('REGISTRATION SUCCESSFUL. Access protocol initiated. Redirecting...');
      setMessageType('success');
      // In a real application, you would make an API call here:
      // apiService.register(formData)
      //   .then(response => {
      //     setMessage('REGISTRATION SUCCESSFUL. Redirecting...');
      //     setMessageType('success');
      //     // Redirect to dashboard or login
      //   })
      //   .catch(error => {
      //     setMessage('ERROR: Registration failed. User ID or email might be in use.');
      //     setMessageType('error');
      //     console.error('Registration error:', error);
      //   });
      setFormData({ username: '', email: '', password: '', confirmPassword: '' }); // Clear form
    }, 1500);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 font-inter text-gray-100 p-4">
      <div className="max-w-md w-full bg-zinc-900 p-8 rounded-lg shadow-xl shadow-fuchsia-500/20 border-2 border-fuchsia-600/50 relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="diagonal-lines" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M-5,5 l10,-10 M0,20 l20,-20 M15,25 l10,-10" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" className="text-cyan-500"/>
          </svg>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-fuchsia-500 text-center mb-8 tracking-wider">
            REGISTER // ACCESS PORTAL
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
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">USER IDENTIFIER</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full p-3 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
                placeholder="Enter desired username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">NEURAL LINK ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
                placeholder="Enter valid email"
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
                className="w-full p-3 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
                placeholder="Create your passkey"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">CONFIRM PASSKEY</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-3 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
                placeholder="Re-enter your passkey"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-lg"
            >
              INITIATE REGISTRATION
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-sm">
            Already have an account? <a href="/login" className="text-cyan-400 hover:underline">ACCESS LOGIN</a>
          </p>
        </div>
      </div>
    </div>
  )
}
