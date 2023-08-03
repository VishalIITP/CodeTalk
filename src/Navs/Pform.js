import React from "react";

import "./../App.css";

function Pform() {
  const [vpa, setVpa] = React.useState("");
  const [verr, setVerr] = React.useState("");

  const handleVPAChange = (e) => {
    setVpa(e.target.value);
  };
  async function collectData() {
    if (!vpa || vpa.length < 3) {
      setVerr("Invalid VPA");
    } else {
      setVerr("");

      try {
        let response = await fetch("https://codetalkbackend.onrender.com/users/register/checkout", {
          method: "put",
          body: JSON.stringify({
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
    }
  }

  return (
    <div>
      <div className="formInputs">
        <div className="fit49"></div> 
        <div className="fiboxP"></div>

        <a
          className="payNow"
          href="upi://pay/?pn=with%20Upilink.in%20&pa=8303541949@paytm&cu=INR&am=499.0"
        >
          <div className="fibox">
            <label className="filabel" htmlFor="vpa">
              <center>
                Scan QR code
                <br />
                or
              </center>
            </label>
            <button className="fiinput">Pay with App</button>
          </div>
        </a>

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
