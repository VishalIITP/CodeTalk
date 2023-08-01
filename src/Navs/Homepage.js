import React from "react";
// import ReactPlayer from "react-player"
// import { Link } from "react-router-dom";
// import RegisterNowBut from "./RegisterNowBut";
import RnB from "../components/RnB";
import RnBB from "../components/RnBB";
import Accordian from "../components/Accordian";
import Wwyl from "../components/Wwyl";
import Btyb from "../components/Btyb";
import Hitw from "../components/Hitw";
import Videobox from "../components/Videobox";
import Whenwhere from "../components/Whenwhere";
import HeroT1 from "../components/HeroT1";
import HeroT2 from "../components/HeroT2";
import Ebo from "../components/Ebo";
import EnrollNow from "../components/EnrollNow";
import Certification from "../components/Certification";
import Lpu from "../components/Lpu";
import CoursePlan from "../components/Courseplan";
// import {useLayoutEffect, useRef, useState} from 'react';
// import calendar from './../../Assests/symbols/calendar.png'
// import clock from './../../Assests/symbols/clock.png'


const Homepage = () => {

  return (
    <div>
      <div className="completeBodyHome">
        <div className="bodycontentHome">
          <div className="topblack"></div>
          <HeroT1 />
          <HeroT2 />
          <Whenwhere />
          <Videobox />
          <RnB /> {/* RnB:Register Now button to be used everywhere */}
          <Btyb />  
          <Hitw />
          <div className="height20"></div>
          <CoursePlan/>
          <div className="height20"></div>
          <RnB/>
          <Wwyl />
          <div className="height20"></div>
          <RnB/>
          <Lpu/>
           <EnrollNow/>
          <div className="height20"></div>

          <RnB/>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>
          <Certification/>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>

          <RnB/>
          <div className="height20"></div>
          <Accordian />
          <RnBB/>{/* RnBB: Register Now Button Bottom Sticky */}
          <Ebo />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
