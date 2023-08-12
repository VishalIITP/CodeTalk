import React from "react";
import Ydform from "./Ydform";

import './../components/css/Register.css'

function Register() {
  return (
    <>
      <div className="completeBodyCheckout">
        <div className="bodycontentCheckout">
          <div className="topblue"></div>
          <div className="btyblogobox">
            <div className="btyblogo"></div>
            <div className="btybline"></div>
            <div className="btybmentor">
              <div className="btybwith">with</div>
              <div className="btybwithline"></div>
              <div className="btybwithmentorDetails">
                <div className="btybwmtop">Vishal Yadav </div>
                <div className="btybwmleft">B.Tech</div>
                <div className="btybwmright">IIT PATNA</div>
              </div>
            </div>
          </div>

          <div className="JOSA">
            <div className="josaText">You are just one step away.</div>
          </div>

          <div className="formbox">
            <div className="formContent">
              <div className="fbgreen"></div>
              <div className="fbgtriangle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <path
                    d="M7.51775 12.0071L0.565184 0.750865L14.4834 0.763435L7.51775 12.0071Z"
                    fill="#37ED81"
                  />
                </svg>
              </div>
              <div className="formgreyborder">
                <div className="fsbbox">
                  <button className="formSectionbuttonl">
                    <div className="fbsn">1</div>
                    <div className="fbydbox">
                      <div className="fbyd">Your Details</div>
                      <div className="fbfa">for Access</div>
                    </div>
                  </button>
                  <button className="formSectionbuttonr">
                    <div className="fbsn">2</div>
                    <div className="fbydbox">
                      <div className="fbyd">Payments</div>
                      <div className="fbfa">of your program</div>
                    </div>
                  </button>
                </div>
                <Ydform />
              </div>
            </div>
          </div>
          <p className="refDetails">Get a cashback of Rs.30<br /> for every successful referral.</p>
        </div>
      </div>
    </>
  );
}

export default Register;
