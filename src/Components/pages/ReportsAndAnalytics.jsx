import React, { useState } from 'react';

export const ReportsAndAnalytics = () => {
     const [reportFilters, setReportFilters] = useState({
    timeframe: 'Last 30 Days',
    project: 'All Projects',
    team: 'All Teams',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setReportFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateReport = () => {
    // In a real application, this would trigger an API call to generate a report
    // based on the selected filters and display dynamic data or download a file.
    alert(`Generating report for:\nTimeframe: ${reportFilters.timeframe}\nProject: ${reportFilters.project}\nTeam: ${reportFilters.team}\n\n(This is a simulation. Report generation logic would go here!)`);
    console.log('Generating report with filters:', reportFilters);
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

        /* Border Animation for Reports main content */
        @keyframes border-glow-reports {
          0%, 100% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          33% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
          66% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
        }
        .animate-border-glow-reports {
            border: 2px solid;
            animation: border-glow-reports 8.5s infinite alternate;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">REPORTS // DATA INSIGHTS</h1>
        <div className="flex items-center space-x-4">
          {/* Filter Controls */}
          <select
            name="timeframe"
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={reportFilters.timeframe}
            onChange={handleFilterChange}
          >
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="Current Quarter">Current Quarter</option>
            <option value="Last Year">Last Year</option>
            <option value="All Time">All Time</option>
          </select>
          <select
            name="project"
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={reportFilters.project}
            onChange={handleFilterChange}
          >
            <option value="All Projects">All Projects</option>
            <option value="Quantum Nexus Initiative">Quantum Nexus Initiative</option>
            <option value="Neural Link Interface">Neural Link Interface</option>
            <option value="Urban Drone Network">Urban Drone Network</option>
          </select>
          <select
            name="team"
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={reportFilters.team}
            onChange={handleFilterChange}
          >
            <option value="All Teams">All Teams</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Security">Security</option>
          </select>
          <button
            onClick={handleGenerateReport}
            className="px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-sm"
          >
            GENERATE REPORT
          </button>
        </div>
      </header>

      {/* Reports and Analytics Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-reports"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-reports" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-reports)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-reports)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-reports)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-10">
          {/* Section: Overall Project Health */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-lime-500/10 border border-lime-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">PROJECT HEALTH OVERVIEW // SYSTEM DIAGNOSIS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-700 p-5 rounded-lg text-center shadow-md border border-cyan-600/30">
                <p className="text-4xl font-bold text-lime-400">85%</p>
                <p className="text-gray-400 text-sm mt-2">Overall Project Completion</p>
              </div>
              <div className="bg-zinc-700 p-5 rounded-lg text-center shadow-md border border-fuchsia-600/30">
                <p className="text-4xl font-bold text-fuchsia-400">3</p>
                <p className="text-gray-400 text-sm mt-2">Critical Issues Detected</p>
              </div>
              <div className="bg-zinc-700 p-5 rounded-lg text-center shadow-md border border-yellow-600/30">
                <p className="text-4xl font-bold text-yellow-400">5</p>
                <p className="text-gray-400 text-sm mt-2">Upcoming Deadlines (7 days)</p>
              </div>
            </div>
          </div>

          {/* Section: Resource Utilization (Chart Placeholder) */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">RESOURCE ALLOCATION // OPTIMIZATION METRICS</h2>
            <div className="h-64 flex items-center justify-center bg-zinc-900 border border-dashed border-gray-700 rounded-md">
              <p className="text-gray-600 text-xl italic">
                [ Dynamic Resource Utilization Chart Here (e.g., Bar Chart, Heatmap) ]
              </p>
              {/* Example of how you might integrate a recharts component: */}
              {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockResourceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 100, 100, 0.3)" />
                  <XAxis dataKey="name" stroke="#A0A0A0" tick={{ fill: '#A0A0A0' }} />
                  <YAxis stroke="#A0A0A0" tick={{ fill: '#A0A0A0' }} />
                  <Tooltip wrapperStyle={{ backgroundColor: 'rgba(30,30,30,0.9)', border: '1px solid #00CED1' }} />
                  <Legend wrapperStyle={{ color: '#A0A0A0' }} />
                  <Bar dataKey="utilization" fill="#F06292" name="Utilization (%)" />
                </BarChart>
              </ResponsiveContainer> */}
            </div>
          </div>

          {/* Section: Performance Trends (Chart Placeholder) */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">PERFORMANCE TRENDS // EFFICIENCY ANALYSIS</h2>
            <div className="h-64 flex items-center justify-center bg-zinc-900 border border-dashed border-gray-700 rounded-md">
              <p className="text-gray-600 text-xl italic">
                [ Dynamic Performance Trend Chart Here (e.g., Line Chart, Area Chart) ]
              </p>
            </div>
          </div>

          {/* Section: Custom Report Generation */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-lime-500/10 border border-lime-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">CUSTOM REPORT GENERATOR // PARAMETER DEFINITION</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="reportType" className="block text-sm font-medium text-gray-300 mb-2">Report Type</label>
                <select
                  id="reportType"
                  name="reportType"
                  className="w-full p-3 bg-zinc-700 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  // Add state for reportType if needed for more complex logic
                >
                  <option>Summary Report</option>
                  <option>Detailed Task Log</option>
                  <option>Team Performance Matrix</option>
                  <option>Financial Overview (Simulated)</option>
                </select>
              </div>
              <div>
                <label htmlFor="outputFormat" className="block text-sm font-medium text-gray-300 mb-2">Output Format</label>
                <select
                  id="outputFormat"
                  name="outputFormat"
                  className="w-full p-3 bg-zinc-700 border border-fuchsia-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  // Add state for outputFormat
                >
                  <option>PDF (Optimized)</option>
                  <option>CSV (Raw Data)</option>
                  <option>JSON (API Export)</option>
                </select>
              </div>
              <button
                onClick={handleGenerateReport} // Reuse the existing handler or make a new one for specific custom reports
                className="w-full px-6 py-3 bg-gradient-to-r from-lime-600 to-green-700 text-white font-bold rounded-md shadow-lg shadow-lime-500/30 hover:shadow-lime-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-lime-400 uppercase text-lg"
              >
                EXECUTE REPORT GENERATION
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
