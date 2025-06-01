import React from 'react'
import { Link } from 'react-router-dom';
export const LandingPage = () => {
  return (
   <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-blue-200 py-20 px-4 text-center overflow-hidden">
        {/* Background blobs/shapes (optional visual flair) */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
            Effortless Project Management, Seamless Collaboration.
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-10 max-w-3xl mx-auto">
            Organize tasks, track progress, and collaborate with your team all in one intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Get Started for Free
            </Link>
            <Link
              to="/features"
              className="px-8 py-4 border-2 border-blue-600 text-blue-700 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image / Screenshot Placeholder */}
        <div className="mt-20 w-11/12 max-w-5xl bg-white shadow-xl rounded-xl p-6 flex items-center justify-center h-80 md:h-96 border border-gray-200">
          {/* <img src={heroImage} alt="Project Management Dashboard" className="w-full h-full object-contain rounded-lg" /> */}
          <p className="text-gray-400 text-2xl italic">Your amazing app screenshot/illustration goes here!</p>
        </div>
      </section>

      {/* 2. Feature Showcase Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Key Features That Boost Productivity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature Item 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* <CheckCircleIcon className="w-16 h-16 text-blue-500 mb-6" /> */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intuitive Task Management</h3>
              <p className="text-gray-600">
                Break down projects into manageable tasks, assign them, set deadlines, and track status with ease.
              </p>
            </div>

            {/* Feature Item 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* <UsersIcon className="w-16 h-16 text-green-500 mb-6" /> */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-2m-3 0h-2m-3 0H7M5 10a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real-time Collaboration</h3>
              <p className="text-gray-600">
                Communicate, share files, and get updates from your team instantly, keeping everyone on the same page.
              </p>
            </div>

            {/* Feature Item 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* <ChartBarIcon className="w-16 h-16 text-purple-500 mb-6" /> */}
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.05a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5.05a2 2 0 012-2h4zM16 17v2m-4-2v2m-4-2v2"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Powerful Progress Tracking</h3>
              <p className="text-gray-600">
                Visualize project timelines, monitor team workload, and generate reports to stay on top of your goals.
              </p>
            </div>

            {/* Feature Item 4 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* Placeholder for a custom icon or another Heroicon */}
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customizable Workflows</h3>
              <p className="text-gray-600">
                Tailor your project boards and workflows to fit your team's unique needs and methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to Action Section (Repeat CTA) */}
      <section className="py-24 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Project Management?</h2>
          <p className="text-xl md:text-2xl mb-12">
            Join thousands of teams who are already achieving more with our platform.
          </p>
          <Link
            to="/signup"
            className="px-12 py-5 bg-white text-blue-700 text-xl font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300 text-center text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Your Project Manager. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">Contact Us</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
