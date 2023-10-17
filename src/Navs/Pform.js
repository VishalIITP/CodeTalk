import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./../App.css";
import "./../components/css/Pform.css"
import './../components/css/Ydform.css'
import qrcwithoutRC from './../Assests/Images/qr.jpg';
import qrcwithRC from './../Assests/Images/qrwithDisc.jpg';
import { price} from '../Navs/Globalvars';


import { rcApp } from "./Ydform";

const API_PATH = process.env.REACT_APP_API_PATH;

function Pform() {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const navigate = useNavigate();
  const [vpa, setVpa] = useState("");
  const [verr, setVerr] = useState("");
  let { userId } = useParams();
  userId = userId.toString();
  console.log(userId);

  const paymentsPage = () => {
    window.location.href = "https://cosmofeed.com/vp/64ce5dcc9a8a3e001e2f13e0";
  }
  const handleVPAChange = (e) => {
    setVpa(e.target.value);
  };
  async function collectData() {
    if (!vpa || vpa.length < 3) {
      setVerr("Invalid VPA");
    } else {
      setVerr("");
      navigate('/register/checkout/payment_success');
      try {
        let response = await fetch(`${API_PATH}/register/checkout`, {
          method: "PUT",
          body: JSON.stringify({
            UserId: userId,
            VPA: vpa,
            PTime: Date().toLocaleString(),
          }),
          headers: {
            "content-type": "Application/json",
          },
        });

        if (!response.ok) {
          console.log("Response was not ok");
        }
      } catch (error) {
        console.log("Not able to fetch", error);
      }
    }
  }
  return (
    <div>
      <div className="PformInputs">
        <div className="fit49">{rcApp?(<div className="disc">Referral Code Applied flat 5% off Pay ₹334 <strike>₹{price}</strike></div>):(<></>)}</div>
        <div className="fiboxPimg"><img className="qrImage" src={rcApp?qrcwithRC:qrcwithoutRC} alt={"Payment Qr Code"}></img></div>
        <div className="Pfibox">
          <label className="filabel" htmlFor="vpa">
            <center>
              Scan QR code to pay with zero transaction fees
              <br />
              or
            </center>
          </label>
          <button className="fiinput MPOs" onClick={paymentsPage} >More Payment options</button>
        </div>
        <div className="Pfibox">
          <label className="filabel" htmlFor="vpa">
            VPA <span className="fmandatory">*</span>
          </label>
          <input
            required="true"
            className="Pfiinput"
            id="vpa"
            type="text"
            value={vpa}
            placeholder="Your UPI ID : expample@paytm"
            onChange={handleVPAChange}
          ></input>
          <span className="ferr">{verr}</span>
        </div>
        {/* Bottom Blue Submit Button */}
        <button className="PBBSB" onClick={collectData}>
          <div className="bbsbtext">
            <div className="bbsbta"></div>
            <div className="bbsbttP">Done</div>
          </div>
          <div className="bbsbbt"></div>
        </button>
      </div>
    </div>
  );
}

export default Pform;
