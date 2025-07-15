import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { FaTasks } from "react-icons/fa";
export const CalendarView = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/tasks");
        setTasks(res.data.data || []);
      } catch (err) {
        console.error("Error fetching tasks:", err.message);
      }
    };

    fetchTasks();
  }, []);

  const getTasksForDate = (date) => {
    const target = date.toDateString();
    return tasks.filter(
      (task) => new Date(task.dueDate).toDateString() === target
    );
  };
  return (
    <div className="min-h-screen bg-[#0B1D51] px-6 py-10 text-[#91C8E4]">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2 text-purple-400">
        <FaTasks /> Task Calendar
      </h1>

      <div className="bg-zinc-900 p-4 rounded-lg shadow-lg w-fit mx-auto">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={({ date, view }) => {
            const dayTasks = getTasksForDate(date);
            return (
              <div className="flex justify-center items-center mt-1">
                {dayTasks.length > 0 && (
                  <span className="bg-purple-400 h-2 w-2 rounded-full" />
                )}
              </div>
            );
          }}
          className="custom-calendar"
        />
      </div>

      <div className="mt-10">
        <h2 className="text-xl mb-4 text-white">
          Tasks for {selectedDate.toDateString()}
        </h2>
        <ul className="space-y-2">
          {getTasksForDate(selectedDate).map((task) => (
            <li
              key={task._id}
              className="bg-zinc-800 p-4 rounded-md shadow border border-zinc-700"
            >
              <h3 className="text-lg font-semibold text-white">{task.title}</h3>
              <p className="text-sm text-gray-300">{task.description}</p>
              <p className="text-sm text-purple-300">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-blue-300">
                Assigned To: {task.assignedTo}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
