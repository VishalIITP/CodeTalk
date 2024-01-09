import React, { useEffect, useState } from "react";
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
import { HeroT1 } from "../components/HeroT1";
import HeroT2 from "../components/HeroT2";
import Ebo from "../components/Ebo";
import EnrollNow from "../components/EnrollNow";
import Certification from "../components/Certification";
import Lpu from "../components/Lpu";
// import CoursePlan from "../components/TimeTable/Courseplan";
import FeedSuggest from "../components/FeedSuggest";
import Classpic from "../components/Classpic";
// import Footer from "../components/Footer";
// import {useLayoutEffect, useRef, useState} from 'react';
// import calendar from './../../Assests/symbols/calendar.png'
// import clock from './../../Assests/symbols/clock.png'
const API_PATH = process.env.REACT_APP_API_PATH;


const Homepage = () => {
  const [actwebContent, setActwebContent] = useState([]);
  // eslint-disable-next-line
  const [actwebFetched,setActwebFetched]=useState(false);
  const fetchactiveWeb = async () => {
    try {
      let response = await fetch(`${API_PATH}/active-website/`)
      if (response.ok) {
        const data = await response.json();
        setActwebContent(data);
        console.log("Active website is", data.websiteName);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

useEffect(()=>{
  if(!actwebFetched){
    fetchactiveWeb();
    sessionStorage.setItem('actwebFetched','true');
  }
},[actwebFetched]);
  
 
  return (
    <div>
      <div className="completeBodyHome">
        <div className="bodycontentHome">
          <div className="topblack"></div>
          <HeroT1 actwebContent={actwebContent}/>
          <HeroT2 actwebContent={actwebContent}/>
          <Whenwhere actwebContent={actwebContent}/>
          <Videobox actwebContent={actwebContent}/>
          <div className="height20"></div>
          <RnB actwebContent={actwebContent}/> {/* RnB:Register Now button to be used everywhere */}
          <Btyb actwebContent={actwebContent}/>
          <Hitw actwebContent={actwebContent}/>
          <div className="height20"></div>
          {/* <CoursePlan actwebContent={actwebContent}/> */}
          <div className="height20"></div>
          <RnB actwebContent={actwebContent}/>
          <Wwyl actwebContent={actwebContent}/>
          <div className="height20"></div>
          <RnB actwebContent={actwebContent}/>
          <Lpu actwebContent={actwebContent}/>
          <EnrollNow actwebContent={actwebContent}/>
          <div className="height20"></div>

          <RnB actwebContent={actwebContent}/>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>
          <Certification actwebContent={actwebContent}/>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>
          <div className="height20"></div>

          <RnB actwebContent={actwebContent}/>
          <div className="height20"></div>
          <Classpic actwebContent={actwebContent}/>
          <Accordian actwebContent={actwebContent}/>
          <FeedSuggest actwebContent={actwebContent}/>
          <RnBB actwebContent={actwebContent}/>{/* RnBB: Register Now Button Bottom Sticky */}
          <Ebo actwebContent={actwebContent}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
