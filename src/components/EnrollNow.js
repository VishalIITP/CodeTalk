import React from "react";
import "./css/EnrollNow.css"; // Add your custom CSS for styling
import "./css/Wwyl.css";
import "./../App.css";
import { Link } from "react-router-dom";

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
              <span className="ENpricegreen">₹499</span>{" "}
              <strike className="ENprice">₹1499</strike>
            </div>
           
              <div className="ENP">
                <div className="ENPtick"></div>
                <div className="ENPtext">
                  This is the text content that appears on the left side of the
                  box. You can replace this with your own content.
                </div>
              </div>
              <div className="ENP">
                <div className="ENPtick"></div>
                <div className="ENPtext">
                  This is the text content that appears on the left side of the
                  box. You can replace this with your own content.
                </div>
              </div>
              <div className="ENP">
                <div className="ENPtick"></div>
                <div className="ENPtext">
                  This is the text content that appears on the left side of the
                  box. You can replace this with your own content.
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
                  You will get Lorem Ipsum khkjl
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
            </div>

            {/*Amazing bonuses */}
            <div className="RTh">Amazing bonuses included... {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</div>
            <div className="RENpoints">
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
                </div>
              </div>
              <div className="ENP">
                <div className="RENPtick"></div>
                <div className="ENPtext">
                  You will get Lorem Ipsum
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
