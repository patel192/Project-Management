import React from 'react'

export const LandingPage = () => {
  return (
     <div className="min-h-screen bg-gray-50 font-inter text-gray-900">
      {/* Navbar (Simple) */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">ProManage</a>
          <div>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-colors duration-200">Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-colors duration-200">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-colors duration-200">Contact</a>
            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Effortless Project Management for Modern Teams
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Streamline your workflows, collaborate seamlessly, and deliver projects on time and within budget.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Get Started Free
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features Designed for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4 4m0 0l-4-4m4 4V8"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Intuitive Task Management</h3>
              <p className="text-gray-700 text-center">
                Organize, assign, and track tasks with ease. Visualize progress with Kanban boards, Gantt charts, and list views.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-green-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2m20 0h-3V10a6 6 0 00-12 0v10M9 10a6 6 0 016 6v4H9m-7 0h14"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Seamless Team Collaboration</h3>
              <p className="text-gray-700 text-center">
                Communicate, share files, and get real-time updates. Keep everyone on the same page, no matter where they are.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Powerful Reporting & Analytics</h3>
              <p className="text-gray-700 text-center">
                Gain insights into project performance with customizable dashboards and detailed reports. Identify bottlenecks easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Project Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of successful teams using ProManage to achieve their project goals faster.
          </p>
          <button className="px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 ProManage. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
