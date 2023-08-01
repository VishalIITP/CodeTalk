import React from "react";
import "./css/Lpu.css";

const Lpu = () => {
    return (
        <>
            <div className="enrollNowH">
                <div className="byah">Mentoring <span >Experience</span></div>
                <div className="byat">Mentored students at <b>Lovely Professional University</b> and <b>Bulls Eye Knowledge System</b> </div>
            </div>
            <div className="enrollNowbox">
                <div className="container">
                    <div className="left-certbox">
                        <div className="internImagebox"></div>
                    </div>

                    {/*Right Text Section*/}

                    <div className="right-text">


                        <div className="Rgreenbox"><div className="Rvalidate"></div></div>
                        <div className="Rtext">
                            <div className="Rheading">Validate your learning {"\u00A0"}</div>
                            Recieve an official certificate signed by your mentor vouching that you've
                            completed the course and validate your learning with sharerable proof.
                        </div>


                        <div className="Rgreenbox"><div className="Rshowoff"></div></div>
                        <div className="Rtext">
                            <div className="Rheading">Show if off! {"\u00A0"}</div>
                            Flaunt your CodeTalk Certificate on your CV or your LinkedIn
                            and wow prospective employers.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lpu;
