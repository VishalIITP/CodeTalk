import React from "react";
import { useParams } from "react-router-dom";
import config from "../../config";
import "./../App.css";

function Pform() {
  const [vpa, setVpa] = React.useState("");
  const [verr, setVerr] = React.useState("");
  const {userId}=useParams();
  userId=userId.toString();
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

      try {
        let response = await fetch(`${config.API_PATH}/users/register/checkout`, {
          method: "put",
          body: JSON.stringify({
            UserId:userId,
            VPA: vpa,
            PaymentTime: Date().toLocaleString(),
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
        window.location.href="https://codetalk.tech/register/checkout/payment_success";
    }
  }

  return (
    <div>
      <div className="formInputs">
        <div className="fit49"></div>
        <div className="fiboxP"></div>


        <div className="fibox">
          <label className="filabel" htmlFor="vpa">
            <center>
              Scan QR code to pay with zero transaction fees
              <br />
              or
            </center>
          </label>
      <button className="fiinput MPOs" onClick={paymentsPage} >More Payment options</button>
      </div>
       


        <div className="fibox">
          <label className="filabel" htmlFor="vpa">
            VPA <span className="fmandatory">*</span>
          </label>
          <input
            required="true"
            className="fiinput"
            id="vpa"
            type="text"
            value={vpa}
            placeholder="Your UPI ID : expample@paytm"
            onChange={handleVPAChange}
          ></input>
          <span className="ferr filabel">{verr}</span>
        </div>
        {/* Bottom Blue Submit Button */}
        <button className="BBSB" onClick={collectData}>
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
