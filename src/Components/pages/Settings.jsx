import React from 'react'
import { useState } from 'react';
export const Settings = () => {
    const [userSettings, setUserSettings] = useState({
    fullName: 'Blade Runner_77',
    username: 'netrunner_zero',
    email: 'netrunner.zero@neuralnet.com',
    bio: 'Digital nomad. Architect of the future. Always optimizing.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    notifications: {
      projectUpdates: true,
      taskAssignments: true,
      systemAlerts: false,
    },
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (setting) => {
    setUserSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [setting]: !prev.notifications[setting],
      },
    }));
  };

  const handlePasswordFormChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    console.log('Profile Settings Saved:', userSettings);
    // In a real app, send to API
    alert('Profile settings updated successfully!'); // Replace with a custom modal
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      alert('New passwords do not match!'); // Replace with custom modal
      return;
    }
    console.log('Password Change Request:', passwordForm);
    // In a real app, send to API
    alert('Password changed successfully!'); // Replace with custom modal
    setPasswordForm({ currentPassword: '', newPassword: '', confirmNewPassword: '' }); // Clear form
  };
  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-gray-100 flex">
      {/* Sidebar (simplified for Settings page) */}
      <div className="w-64 bg-zinc-900 border-r border-fuchsia-600/40 flex flex-col p-4 shadow-lg shadow-fuchsia-500/20">
        <div className="text-3xl font-extrabold text-fuchsia-500 tracking-wider mb-8">
          PRO<span className="text-cyan-400">MANAGE</span>
        </div>
        <nav className="flex-1 space-y-4">
          <a href="/dashboard" className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:text-cyan-400 hover:bg-zinc-800 transition-colors duration-200">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 0 01-1 1H11m-4 0a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H7z"></path></svg>
            Dashboard
          </a>
          <a href="/projects" className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:text-cyan-400 hover:bg-zinc-800 transition-colors duration-200">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4 4m0 0l-4-4m4 4V8"></path></svg>
            Projects
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-fuchsia-400 bg-cyan-900/30 border border-fuchsia-700/50 shadow-md shadow-cyan-500/10 transition-all duration-200 hover:bg-cyan-800/40 hover:text-white">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.942 3.313.885 2.443 2.443a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.942 1.543-.885 3.313-2.443 2.443a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.942-3.313-.885-2.443-2.443a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.942-1.543.885-3.313 2.443-2.443a1.724 1.724 0 002.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Settings
          </a>
        </nav>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2077 ProManage. V 2.0.1</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar / Header */}
        <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
          <h1 className="text-3xl font-bold text-cyan-400">SETTINGS // CONFIGURATION</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Logged in as: {userSettings.username}</span>
            <img src={userSettings.avatar} alt="User Avatar" className="h-10 w-10 rounded-full border-2 border-fuchsia-400" />
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-8 bg-zinc-950">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Profile Settings Section */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
              <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">PROFILE DATA // INTERFACE</h2>
              <form onSubmit={handleProfileSave} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={userSettings.fullName}
                    onChange={handleProfileChange}
                    className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username (Read-Only)</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={userSettings.username}
                    readOnly
                    className="w-full p-3 bg-zinc-700 border border-gray-600 rounded-md text-gray-400 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userSettings.email}
                    onChange={handleProfileChange}
                    className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">Bio/Status Message</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={userSettings.bio}
                    onChange={handleProfileChange}
                    rows="3"
                    className="w-full p-3 bg-zinc-700 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-sm"
                >
                  SAVE PROFILE DATA
                </button>
              </form>
            </div>

            {/* Notification Settings Section */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">ALERT SYSTEMS // NOTIFICATION PROTOCOLS</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-300">Project Updates</span>
                  <label htmlFor="toggle-project-updates" className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="toggle-project-updates"
                        className="sr-only"
                        checked={userSettings.notifications.projectUpdates}
                        onChange={() => handleNotificationToggle('projectUpdates')}
                      />
                      <div className="block bg-zinc-700 w-14 h-8 rounded-full"></div>
                      <div className={`dot absolute left-1 top-1 bg-gray-400 w-6 h-6 rounded-full transition ${userSettings.notifications.projectUpdates ? 'transform translate-x-full bg-fuchsia-500' : ''}`}></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-300">Task Assignments</span>
                  <label htmlFor="toggle-task-assignments" className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="toggle-task-assignments"
                        className="sr-only"
                        checked={userSettings.notifications.taskAssignments}
                        onChange={() => handleNotificationToggle('taskAssignments')}
                      />
                      <div className="block bg-zinc-700 w-14 h-8 rounded-full"></div>
                      <div className={`dot absolute left-1 top-1 bg-gray-400 w-6 h-6 rounded-full transition ${userSettings.notifications.taskAssignments ? 'transform translate-x-full bg-fuchsia-500' : ''}`}></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-300">System Alerts</span>
                  <label htmlFor="toggle-system-alerts" className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="toggle-system-alerts"
                        className="sr-only"
                        checked={userSettings.notifications.systemAlerts}
                        onChange={() => handleNotificationToggle('systemAlerts')}
                      />
                      <div className="block bg-zinc-700 w-14 h-8 rounded-full"></div>
                      <div className={`dot absolute left-1 top-1 bg-gray-400 w-6 h-6 rounded-full transition ${userSettings.notifications.systemAlerts ? 'transform translate-x-full bg-fuchsia-500' : ''}`}></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Security Settings Section */}
            <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-lime-500/10 border border-lime-700/50">
              <h2 className="text-2xl font-bold text-lime-400 mb-6 border-b border-lime-600/30 pb-3">SECURITY PROTOCOLS // ACCESS CREDENTIALS</h2>
              <form onSubmit={handleChangePassword} className="space-y-6">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-1">Current Passkey</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordFormChange}
                    className="w-full p-3 bg-zinc-700 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">New Passkey</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordFormChange}
                    className="w-full p-3 bg-zinc-700 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                </div>
                <div>
                  <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-300 mb-1">Confirm New Passkey</label>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    value={passwordForm.confirmNewPassword}
                    onChange={handlePasswordFormChange}
                    className="w-full p-3 bg-zinc-700 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-lime-600 to-green-700 text-white font-bold rounded-md shadow-lg shadow-lime-500/30 hover:shadow-lime-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-lime-400 uppercase text-sm"
                >
                  UPDATE PASSKEY
                </button>
              </form>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
