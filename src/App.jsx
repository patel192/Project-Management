import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Register } from "./Components/pages/Register";
import { Login } from "./Components/pages/Login";
import {UserDashBoard } from "./Components/dashboard/user/UserDashBoard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserDashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
