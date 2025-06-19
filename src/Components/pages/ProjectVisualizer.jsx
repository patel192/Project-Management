import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
export const ProjectVisualizer = () => {
  const projectPhasesData = [
    { name: "Phase 1: Inception", progress: 90, uv: 4000, pv: 2400, amt: 2400 },
    { name: "Phase 2: Design", progress: 70, uv: 3000, pv: 1398, amt: 2210 },
    {
      name: "Phase 3: Development",
      progress: 55,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    { name: "Phase 4: Testing", progress: 30, uv: 2780, pv: 3908, amt: 2000 },
    {
      name: "Phase 5: Deployment",
      progress: 10,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Phase 6: Optimization",
      progress: 5,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  // Mock Data for Task Burn-down (tasks remaining over days)
  const burnDownData = [
    { day: "Day 1", tasksRemaining: 100 },
    { day: "Day 2", tasksRemaining: 95 },
    { day: "Day 3", tasksRemaining: 80 },
    { day: "Day 4", tasksRemaining: 70 },
    { day: "Day 5", tasksRemaining: 60 },
    { day: "Day 6", tasksRemaining: 55 },
    { day: "Day 7", tasksRemaining: 40 },
    { day: "Day 8", tasksRemaining: 30 },
    { day: "Day 9", tasksRemaining: 20 },
    { day: "Day 10", tasksRemaining: 15 },
  ];
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

        /* Border Animation for Visualizer main content */
        @keyframes border-glow-visualizer {
          0%, 100% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
          33% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          66% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
        }
        .animate-border-glow-visualizer {
            border: 2px solid;
            animation: border-glow-visualizer 8s infinite alternate;
        }

        /* Recharts specific styling to fit cyberpunk theme */
        .recharts-cartesian-grid-horizontal line,
        .recharts-cartesian-grid-vertical line {
          stroke: rgba(100, 100, 100, 0.3); /* Softer grid lines */
        }
        .recharts-tooltip-wrapper {
            background-color: rgba(30, 30, 30, 0.9) !important;
            border: 1px solid rgba(0, 206, 209, 0.5) !important;
            border-radius: 8px !important;
            box-shadow: 0 0 15px rgba(0, 206, 209, 0.3) !important;
            color: #E0E0E0 !important;
        }
        .recharts-tooltip-item {
            color: #F0F0F0 !important;
        }
        .recharts-legend-item-text {
            color: #A0A0A0 !important;
        }
        .recharts-default-tooltip {
            background-color: rgba(10, 10, 10, 0.9) !important;
            border: 1px solid #00CED1 !important;
            box-shadow: 0px 0px 10px #00CED1 !important;
        }
        .recharts-surface {
          overflow: visible; /* Ensure nothing is clipped */
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">
          PROJECT VISUALIZER // DATA OVERLAY
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">SYSTEM ANALYSIS</span>
        </div>
      </header>

      {/* Content Area for Visualizations */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-visualizer">
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            className="w-[200%] h-[200%] opacity-5"
            style={{ transform: "translateX(-50%) translateY(-50%)" }}
          >
            <defs>
              <pattern
                id="animated-line-grid-visualizer"
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
              fill="url(#animated-line-grid-visualizer)"
              className="text-fuchsia-500 animate-slide-diagonal-x-medium"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#animated-line-grid-visualizer)"
              className="text-cyan-500 animate-slide-diagonal-x-reverse-medium"
              style={{ animationDelay: "2s" }}
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#animated-line-grid-visualizer)"
              className="text-lime-500 animate-slide-diagonal-x-medium"
              style={{ animationDelay: "4s" }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-10">
          {/* Project Phases Progress Bar Chart */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-fuchsia-500/10 border border-fuchsia-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-600/30 pb-3">
              PHASE PROGRESS // REALTIME ANALYTICS
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={projectPhasesData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(100, 100, 100, 0.3)"
                />
                <XAxis
                  dataKey="name"
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                />
                <YAxis
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                  label={{
                    value: "Progress (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#A0A0A0",
                  }}
                />
                <Tooltip
                  wrapperStyle={{
                    backgroundColor: "rgba(30, 30, 30, 0.9)",
                    border: "1px solid rgba(0, 206, 209, 0.5)",
                    borderRadius: "8px",
                    boxShadow: "0 0 15px rgba(0, 206, 209, 0.3)",
                    color: "#E0E0E0",
                  }}
                  contentStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  itemStyle={{ color: "#F0F0F0" }}
                />
                <Legend wrapperStyle={{ color: "#A0A0A0" }} />
                <Bar
                  dataKey="progress"
                  fill="#F06292"
                  name="Current Progress"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Task Burn-down Line Chart */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-cyan-500/10 border border-cyan-700/50">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-6 border-b border-fuchsia-600/30 pb-3">
              TASK BURN-DOWN // EFFORT REMAINING
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={burnDownData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(100, 100, 100, 0.3)"
                />
                <XAxis
                  dataKey="day"
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                />
                <YAxis
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                  label={{
                    value: "Tasks Remaining",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#A0A0A0",
                  }}
                />
                <Tooltip
                  wrapperStyle={{
                    backgroundColor: "rgba(30, 30, 30, 0.9)",
                    border: "1px solid rgba(236, 72, 153, 0.5)",
                    borderRadius: "8px",
                    boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)",
                    color: "#E0E0E0",
                  }}
                  contentStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  itemStyle={{ color: "#F0F0F0" }}
                />
                <Legend wrapperStyle={{ color: "#A0A0A0" }} />
                <Line
                  type="monotone"
                  dataKey="tasksRemaining"
                  stroke="#00CED1"
                  activeDot={{ r: 8 }}
                  name="Remaining Tasks"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Placeholder for more complex flow visualization / Gantt chart */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl shadow-lime-500/10 border border-lime-700/50">
            <h2 className="text-2xl font-bold text-lime-400 mb-6 border-b border-lime-600/30 pb-3">
              PROJECT TIMELINE // CRITICAL PATH VISUALIZATION
            </h2>
            <p className="text-gray-400 mb-4">
              Implementing a full Gantt chart or complex flow diagram (like PERT
              charts with dependencies) directly in a general charting library
              like Recharts can be very intricate. This section serves as a
              placeholder for where such a visualization would reside.
            </p>
            <p className="text-gray-400">
              For a comprehensive interactive timeline, dedicated Gantt chart
              libraries or custom SVG/Canvas rendering with a robust data model
              would typically be used.
            </p>
            <div className="h-48 flex items-center justify-center text-gray-600 text-xl italic border border-dashed border-gray-700 rounded-md mt-6">
              [ Complex Project Flow Visualization Area ]
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
