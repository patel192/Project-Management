import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Register } from "./Components/pages/Register";
import { Login } from "./Components/pages/Login";
import { UserDashBoard } from "./Components/dashboard/user/UserDashBoard";
import { Projects } from "./Components/project/Projects";
import { Team } from "./Components/project/team/Team";
import { Tasks } from "./Components/task/Tasks";
import { CalendarView } from "./Components/task/CalendarView";
import { Messages } from "./Components/chat/Messages";
import { Settings } from "./Components/dashboard/user/Settings";
import { Help_Support } from "./Components/dashboard/user/Help&Support";
import { ProjectDetails } from "./Components/project/ProjectDetails";
import { TeamDetails } from "./Components/project/team/TeamDetails";
import { TaskDetails } from "./Components/task/TaskDetails";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserDashBoard />}>
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetails />}></Route>

            <Route path="teams" element={<Team />}></Route>
            <Route path="teams/:id" element={<TeamDetails />}></Route>
            <Route path="tasks" element={<Tasks />}></Route>
            <Route path="tasks/:id" element={<TaskDetails />}></Route>
            <Route path="Calendar" element={<CalendarView />}></Route>
            <Route path="messages" element={<Messages />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="help" element={<Help_Support />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
