import React from "react";
import "./css/EnrollNow.css"; // Add your custom CSS for styling
import "./css/Wwyl.css";
import "./../App.css";
import { Link } from "react-router-dom";

import { price,strikePrice } from "../Navs/Globalvars";

const EnrollNow = () => {
  return (
    <>
      <div className="enrollNowH">
        <div className="enrollNowHT">Enroll Now</div>
      </div>
      <div className="enrollNowbox">
        <div className="container">
          <div className="left-box">
            <div className="ENheading">30 Days DSA Bootcamp</div>

            <div className="price">
              <span className="ENpricegreen">₹{price}</span>{" "}
              <strike className="ENprice">₹{strikePrice}</strike>
            </div>

            <div className="ENP">
              <div className="ENPtick"></div>
              <div className="ENPtext">
                Dive into a meticulously crafted DSA roadmap.
              </div>
            </div>
            <div className="ENP">
              <div className="ENPtick"></div>
              <div className="ENPtext">
                Elevate coding skills through daily disciplined practice.
              </div>
            </div>
            <div className="ENP">
              <div className="ENPtick"></div>
              <div className="ENPtext">
                Engage in interactive Zoom sessions with mentor and peers.
              </div>
            </div>
            <div className="ENP">
              <div className="ENPtick"></div>
              <div className="ENPtext">
                Master error-free coding techniques and problem-solving strategies.
              </div>
            </div>
            <div className="ENP">
              <div className="ENPtick"></div>
              <div className="ENPtext">
                Fast-track your placements preparation in just 4 weeks.
              </div>
            </div>

            <Link className="registerLink" to="/register">
              <div className="enrollNow">
                <div className="enrollNowText">ENROLL NOW</div>
              </div>
            </Link>
            <div className="belowNote">
              Note: No exception will be made beyond the offer expiry date.
              Prices will increase and no free bonuses will be available.
            </div>
          </div>

          {/*Right Text Section*/}

          <div className="right-text">
            <div className="RTh">What will you get {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</div>
            <div className="RENpoints">
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Rich library of coding resources.
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Sharpened algorithmic thinking.
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Resume Enhancement Guide.
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Mock Technical Interviews.
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Certificate of achievement.
                </div>
              </div>

            </div>

            {/*Amazing bonuses */}
            <div className="RTh">Amazing bonuses included... {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</div>
            <div className="RENpoints">
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Insights into Website Building.
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  MERN Stack Web Development tips.
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Portfolio-Ready Projects.
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  Real-world software dev tips.
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNow;
