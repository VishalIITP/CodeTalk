import React from "react";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./../App.css";
// import Navbar from "./Navbar";
import Homepage from "../Navs/Homepage";
import Register from "../Navs/Register";
// import RegisterP from './Navs/RegisterP'
import Pform from "../Navs/Pform";
import PaymentSuccess from "./PaymentSuccess";
import About from "./About/About";
import DashBoard from "./Dashboard/Dashboard";
import TimeTable from "./TimeTable/TimeTable";
import LeaderBoard from "./Leaderboard/Leaderboard";

// import cross from "./../../src/Assests/symbols/cross-image.png"

const BodyMode = (props) => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
        <Route path="/About" element={<About/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/checkout/:userId" element={<Pform />} />
        <Route path="/register/checkout/payment_success" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
};

export default BodyMode;
