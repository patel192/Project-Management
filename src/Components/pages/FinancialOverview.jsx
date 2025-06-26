import React, { useState, useMemo } from "react";

function FinancialOverview() {
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
    if (filterProject === "All") return financialData.projects;
    return financialData.projects.filter((p) => p.name === filterProject);
  }, [financialData.projects, filterProject]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-inter">
      <style>
        {`
          @keyframes neonPulse {
            0%, 100% { box-shadow: 0 0 10px #0ff, 0 0 20px #f0f; }
            50% { box-shadow: 0 0 20px #0ff, 0 0 30px #f0f; }
          }
          .neon-header {
            animation: neonPulse 3s infinite ease-in-out;
            background: linear-gradient(90deg, #ec38bc, #7303c0, #00f5ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .glass {
            background: rgba(24, 24, 27, 0.6);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}
      </style>

      {/* Header */}
      <header className="p-6 border-b border-fuchsia-600/20 shadow-lg bg-zinc-900 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold neon-header">FINANCIAL OVERVIEW // RESOURCE ALLOCATION</h1>
        <div className="flex gap-4">
          <select
            className="bg-zinc-800 text-white border border-cyan-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 ring-cyan-400"
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
            className="bg-gradient-to-r from-fuchsia-600 to-purple-800 text-white px-4 py-2 rounded-md font-bold border border-fuchsia-400 shadow-md hover:shadow-fuchsia-500/60 transition-all hover:scale-105 uppercase text-sm"
          >
            REFRESH DATA
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 relative overflow-y-auto">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-fuchsia-500" />
          </svg>
        </div>

        <div className="relative z-10 space-y-12 max-w-6xl mx-auto">
          {/* System Financials */}
          <section className="glass p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">SYSTEM FINANCIALS // CURRENT STATUS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { label: "Total Budget Allocated", value: financialData.budget, color: "lime-400" },
                { label: "Total Expenses Incurred", value: financialData.expenses, color: "fuchsia-400" },
                { label: "Forecasted Expenses", value: financialData.forecastedExpenses, color: "yellow-400" },
                { label: "Generated Revenue", value: financialData.revenue, color: "green-400" },
              ].map((item, idx) => (
                <div key={idx} className={`p-5 rounded-lg border border-${item.color}/40 bg-zinc-800/60`}>
                  <p className={`text-3xl font-bold text-${item.color}`}>${item.value.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Financial Breakdown */}
          <section className="glass p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-6">PROJECT ALLOCATIONS // BREAKDOWN</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-700">
                <thead>
                  <tr className="text-left text-xs uppercase text-gray-300 bg-zinc-800">
                    <th className="px-6 py-3">Project Name</th>
                    <th className="px-6 py-3">Budget</th>
                    <th className="px-6 py-3">Spent</th>
                    <th className="px-6 py-3">Remaining</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filteredProjectsData.map((p) => (
                    <tr key={p.id} className="hover:bg-zinc-800/70">
                      <td className="px-6 py-4 text-cyan-300 font-medium">{p.name}</td>
                      <td className="px-6 py-4 text-gray-200">${p.budget.toLocaleString()}</td>
                      <td className="px-6 py-4 text-gray-200">${p.spent.toLocaleString()}</td>
                      <td className={`px-6 py-4 font-bold ${p.budget - p.spent < 0 ? "text-red-400" : "text-lime-400"}`}>
                        ${(p.budget - p.spent).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-bold rounded-full
                          ${p.status === "On Track" ? "bg-lime-700 text-lime-200" :
                            p.status === "Over Budget" ? "bg-red-700 text-red-200" : "bg-cyan-700 text-cyan-200"}`}>
                          {p.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Expense Category Chart Placeholder */}
          <section className="glass p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">EXPENSE CATEGORIES // COST DISTRIBUTION</h2>
            <div className="h-64 bg-zinc-900 border border-dashed border-gray-600 rounded-md flex items-center justify-center text-gray-500 italic">
              [ Dynamic Chart Placeholder: Pie / Bar Chart ]
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FinancialOverview;
