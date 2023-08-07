import React, { useState } from "react";
import "./css/classpic.css"; // You can create your own CSS for styling
import lpuclass1 from './../Assests/Images/LPUliveclass.png'
import lpuclass2 from './../Assests/Images/livclasstree2.png'
import lpuclass3 from './../Assests/Images/liveclasstree.png'
import lpuclass4 from './../Assests/Images/liveclassboard.png'
import lpuclass5 from './../Assests/Images/liveclassmeinbig.png'
import lpuclass6 from './../Assests/Images/liveclassfibbonaci.png'




const Classpic = () => {
    const images = [
        lpuclass1, lpuclass2, lpuclass3,lpuclass4,lpuclass5,lpuclass6
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="enrollNowH">
                <div className="byahSlide">LPU live class Snapshots</div>
            </div>
            <div className="image-slider">
                <button className="prev-button" onClick={goToPrevSlide}>
                    <div className="leftBut"></div>
                </button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                <button className="next-button" onClick={goToNextSlide}>
                    <div className="rightBut"></div>
                </button>
            </div>
        </>
    );
};

export default Classpic;
