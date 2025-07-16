import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Register } from "./Components/pages/Register";
import { Login } from "./Components/pages/Login";
import { UserDashBoard } from "./Components/dashboard/user/UserDashBoard";
import { Projects } from "./Components/pages/Projects";
import { Team } from "./Components/project/Team";
import { Tasks } from "./Components/task/Tasks";
import { CalendarView } from "./Components/task/CalendarView";
import { Messages } from "./Components/chat/Messages";
import { Settings } from "./Components/dashboard/user/Settings";
import { Help_Support } from "./Components/dashboard/user/Help&Support";
import { ProjectDetails } from "./Components/project/ProjectDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserDashBoard />}>
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetails />}></Route>

            <Route path="teams" element={<Team />}></Route>
            <Route path="tasks" element={<Tasks />}></Route>
            <Route path="Calendar" element={<CalendarView />}></Route>
            <Route path="messages" element={<Messages />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="help" element={<Help_Support />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
