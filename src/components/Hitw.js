import React from "react";
import "./../App.css";
import "./css/Hitw.css";

function Hitw(props) {
  return (
    <div>
      <div className="HITWORKS">
        <div className="hiwtext">
          <span className="hiwtextwhite"> {props.actwebContent.wthc1}  </span>
          <span className="hiwtextgreen">{props.actwebContent.wthc2}</span>
        </div>

        <div className="bootcampbox">
          <div className="bootcampheading">
            <div className="bchimage"></div>
            <div className="bchtext">{props.actwebContent.wttp}</div>
          </div>
          <div className="bootcampdisc">
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">{props.actwebContent.wtdp1h}:</span>{props.actwebContent.wtdp1c}
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">{props.actwebContent.wtdp2h}:</span> {props.actwebContent.wtdp2c}
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">{props.actwebContent.wtdp3h}:</span> {props.actwebContent.wtdp3c}
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">{props.actwebContent.wtdp4h}:</span> {props.actwebContent.wtdp4c}
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">{props.actwebContent.wtdp5h}:</span> {props.actwebContent.wtdp5c}
              </div>
            </div>
            <div className="bcdlist">
              <div className="bcdltick"></div>
              <div className="bcdltext">
                <span className="bcdHead">{props.actwebContent.wtdp6h}:</span> {props.actwebContent.wtdp6c}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hitw;
