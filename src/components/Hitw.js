import React from "react";
import "./../App.css";
import "./css/Hitw.css";

function Hitw() {
  return (
    <div>
      <div className="HITWORKS">
        <div className="hiwtext">
          <span className="hiwtextwhite"> What's there in the  </span>
          <span className="hiwtextgreen">bootcamp ?</span>
        </div>

        <div className="bootcampbox">
          <div className="bootcampheading">
            <div className="bchimage"></div>
            <div className="bchtext">4 Week Bootcamp</div>
          </div>
          <div className="bootcampdisc">
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">Flexible Course Structure:</span> We understand the demands of
                college life, so our program is designed to fit into your busy
                schedule. Our approach is simple: 5 percent reading concepts and 95 percent
                practice.
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">Comprehensive Curriculum:</span> Our four-week bootcamp covers all essential DSA topics, designed to provide you with a strong foundation. From arrays to graphs, we've got you covered!
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">Live Interactive Sessions:</span> Engage in real-time discussions, problem-solving, and Q&A sessions with our mentors. Clear your doubts instantly and enhance your learning experience.
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">Weekly Coding Challenges:</span> program is designed to challenge you, to push your boundaries and
                prepare for competitive college placement process.
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">Progress Tracking:</span> Stay on top of your growth with regular progress updates. We provide insights into your strengths and areas for improvement, ensuring focused efforts on your weaker sections.
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">Career Preparation:</span> Beyond DSA, we offer interview preparation tips and guidance on building an impressive resume. Get ready to stand out in your placements!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hitw;
