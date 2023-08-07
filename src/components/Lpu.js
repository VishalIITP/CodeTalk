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


                        <div className="Rgreenbox"><div className="RvalidateLPU"></div></div>
                        <div className="Rtext">
                            <div className="Rheading">Lovely Professional University {"\u00A0"}</div>
                            During my tenure as a Teaching Assistant at Lovely Professional University, I had the privilege of contributing to the educational journey of budding minds. Guiding students in the 4th year of their B.Tech in CSE at LPU through intricate coding concepts and fostering a deep understanding of Data Structures and Algorithms was not just a responsibility; it was a profound opportunity to ignite the spark of curiosity and knowledge. Collaborating with esteemed faculty and nurturing the growth of future tech leaders was a fulfilling experience that enriched both my skills and my passion for teaching.
                        </div>


                        <div className="Rgreenbox"><div className="RshowoffLPU"></div></div>
                        <div className="Rtext">
                            <div className="Rheading">Bulls Eye Knowledge System Pvt. Ltd.{"\u00A0"}</div>
                            Stepping into the role of a DSA Mentor at Bullseye Knowledge Systems Private Limited was a dynamic leap into the realm of practical education. Guiding ambitious learners through the intricate maze of Data Structures and Algorithms, I was entrusted with sculpting problem solvers and logical thinkers. The journey was marked by vibrant interactions, collaborative problem-solving, and witnessing the transformation of dedicated learners into confident coders. This experience not only reinforced my expertise but also reaffirmed my commitment to empowering the next generation of coding enthusiasts.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lpu;
