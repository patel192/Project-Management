import React, { useState, useMemo } from "react";
// For future chart integration, you might use recharts or similar:
// import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function FinancialOverview() {
  // Mock Financial Data for demonstration
  const [financialData, setFinancialData] = useState({
    budget: 500000,
    expenses: 280000,
    forecastedExpenses: 450000,
    revenue: 150000,
    projects: [
      {
        id: "proj001",
        name: "Quantum Nexus Initiative",
        budget: 150000,
        spent: 80000,
        status: "On Track",
      },
      {
        id: "proj002",
        name: "Neural Link Interface",
        budget: 100000,
        spent: 100000,
        status: "Over Budget",
      },
      {
        id: "proj003",
        name: "Urban Drone Network",
        budget: 80000,
        spent: 30000,
        status: "Under Budget",
      },
      {
        id: "proj004",
        name: "Automated Cyber-Defense",
        budget: 120000,
        spent: 70000,
        status: "On Track",
      },
    ],
    expenseCategories: [
      { name: "Salaries", amount: 150000 },
      { name: "Hardware", amount: 60000 },
      { name: "Software Licenses", amount: 30000 },
      { name: "Travel", amount: 15000 },
      { name: "Consulting", amount: 25000 },
    ],
  });

  const [filterProject, setFilterProject] = useState("All");

  const filteredProjectsData = useMemo(() => {
    if (filterProject === "All") {
      return financialData.projects;
    }
    return financialData.projects.filter((p) => p.name === filterProject);
  }, [financialData.projects, filterProject]);

  const calculateOverallStatus = (budget, spent) => {
    const remaining = budget - spent;
    if (remaining < 0) return "Over Budget";
    if (remaining > budget * 0.2) return "Under Budget"; // More than 20% budget remaining
    return "On Track";
  };

  const getProjectStatusColor = (status) => {
    switch (status) {
      case "On Track":
        return "text-lime-400";
      case "Over Budget":
        return "text-red-400";
      case "Under Budget":
        return "text-cyan-400";
      default:
        return "text-gray-300";
    }
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

        /* Border Animation for Financial Overview main content */
        @keyframes border-glow-finance {
          0%, 100% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
          33% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          66% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
        }
        .animate-border-glow-finance {
            border: 2px solid;
            animation: border-glow-finance 10.5s infinite alternate;
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">
          FINANCIAL OVERVIEW // RESOURCE ALLOCATION
        </h1>
        <div className="flex items-center space-x-4">
          <select
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={filterProject}
            onChange={(e) => setFilterProject(e.target.value)}
          >
            <option value="All">All Projects</option>
            {financialData.projects.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => alert("Initiating financial data refresh...")}
            className="px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold rounded-md shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-fuchsia-400 uppercase text-sm"
          >
            REFRESH DATA
          </button>
        </div>
      </header>

      {/* Financial Overview Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-finance">
        {" "}
        {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg
            className="w-[200%] h-[200%]"
            style={{ transform: "translateX(-50%) translateY(-50%)" }}
          >
            <defs>
              <pattern
                id="animated-line-grid-finance"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="80"
                  y2="80"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="0"
                  x2="0"
                  y2="80"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#animated-line-grid-finance)"
              className="text-fuchsia-500 animate-slide-diagonal-x-medium"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#animated-line-grid-finance)"
              className="text-cyan-500 animate-slide-diagonal-x-reverse-medium"
              style={{ animationDelay: "2s" }}
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#animated-line-grid-finance)"
              className="text-lime-500 animate-slide-diagonal-x-medium"
              style={{ animationDelay: "4s" }}
            />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-10">
          {/* Overall Financial Metrics */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">
              SYSTEM FINANCIALS // CURRENT STATUS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-zinc-700 p-5 rounded-lg shadow-md border border-cyan-600/30">
                <p className="text-4xl font-bold text-lime-400">
                  ${financialData.budget.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Total Budget Allocated
                </p>
              </div>
              <div className="bg-zinc-700 p-5 rounded-lg shadow-md border border-fuchsia-600/30">
                <p className="text-4xl font-bold text-fuchsia-400">
                  ${financialData.expenses.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Total Expenses Incurred
                </p>
              </div>
              <div className="bg-zinc-700 p-5 rounded-lg shadow-md border border-yellow-600/30">
                <p className="text-4xl font-bold text-yellow-400">
                  ${financialData.forecastedExpenses.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Forecasted Total Expenses
                </p>
              </div>
              <div className="bg-zinc-700 p-5 rounded-lg shadow-md border border-green-600/30">
                <p className="text-4xl font-bold text-green-400">
                  ${financialData.revenue.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm mt-2">Generated Revenue</p>
              </div>
            </div>
          </div>

          {/* Project-Specific Financials */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">
              PROJECT ALLOCATIONS // BREAKDOWN
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-700">
                <thead className="bg-zinc-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Project Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Budget
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Spent
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Remaining
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  {filteredProjectsData.length > 0 ? (
                    filteredProjectsData.map((project) => (
                      <tr
                        key={project.id}
                        className="hover:bg-zinc-700/50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-cyan-300 font-medium">
                          {project.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                          ${project.budget.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                          ${project.spent.toLocaleString()}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap font-bold ${
                            project.budget - project.spent < 0
                              ? "text-red-400"
                              : "text-lime-400"
                          }`}
                        >
                          ${(project.budget - project.spent).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              project.status === "On Track"
                                ? "bg-lime-700 text-lime-200"
                                : project.status === "Over Budget"
                                ? "bg-red-700 text-red-200"
                                : "bg-cyan-700 text-cyan-200"
                            }`}
                          >
                            {project.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 text-center text-gray-500 italic"
                      >
                        No financial data for selected project.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Expense Categories (Chart Placeholder) */}
          <div className="bg-zinc-800 p-8 rounded-lg shadow-xl shadow-lime-500/10 border border-lime-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">
              EXPENSE CATEGORIES // COST DISTRIBUTION
            </h2>
            <div className="h-64 flex items-center justify-center bg-zinc-900 border border-dashed border-gray-700 rounded-md">
              <p className="text-gray-600 text-xl italic">
                [ Dynamic Expense Distribution Chart Here (e.g., Pie Chart, Bar
                Chart) ]
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FinancialOverview;
