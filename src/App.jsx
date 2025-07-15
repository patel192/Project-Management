import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Register } from "./Components/pages/Register";
import { Login } from "./Components/pages/Login";
import {UserDashBoard } from "./Components/dashboard/user/UserDashBoard";
import { Projects } from "./Components/pages/Projects";
import { Team } from "./Components/project/Team";
import { Tasks } from "./Components/task/Tasks";
import { CalendarView } from "./Components/task/CalendarView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserDashBoard />}>
           <Route path="projects" element={<Projects/>}></Route>
           <Route path="teams" element={<Team/>}></Route>
           <Route path="tasks" element={<Tasks/>}></Route>
           <Route path="Calendar" element={<CalendarView/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
