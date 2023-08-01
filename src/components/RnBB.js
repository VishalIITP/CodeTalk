import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './../App.css'
import './css/RnBB.css'

const NewTimer = () => {
  const [timerValue, setTimerValue] = useState(() => {
    const savedValue = sessionStorage.getItem("timerValue");
    return savedValue ? parseInt(savedValue, 10) : 60; // Change the initial value to 60 seconds
  });

  const [isRunning, setIsRunning] = useState(true);

  // Function to start the timer
  //   const startTimer = () => {
  //     setIsRunning(true);
  //   };

  // Function to stop the timer
  //   const stopTimer = () => {
  //     setIsRunning(false);
  //   };

  // Function to reset the timer
  const resetTimer = () => {
    setTimerValue(375); // Reset the timer to 375 seconds
    setIsRunning(true);
  };

  // Function to update the countdown timer value every second
  useEffect(() => {
    let interval;
    if (isRunning && timerValue > 0) {
      interval = setInterval(() => {
        setTimerValue((prevValue) => prevValue - 1);
      }, 1000);
    } else if (timerValue === 0) {
      setInterval(resetTimer, 3000); // Start the timer agian when it reaches 0
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timerValue]);

  // Store the timer value in sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("timerValue", timerValue.toString());
  }, [timerValue]);

  let minutes = Math.floor(timerValue / 60);
  let seconds = timerValue % 60;

  return (
    <>
    
      <div className="bottomRegisterOffer">
        <div className="bottomOffer">
          <div className="boPricebox">
          {timerValue? <span> <div className="boPrice">₹499</div>
            <div className="boPricestrike">
              <strike>₹1499</strike>
            </div></span>:<div className="boPrice">₹1499</div>}
          </div>
          <div className="boTimerboox">
            <div className="botimerText">
              <div className="booffertext">offer ends in</div>
              <div className="botimer">{minutes<=9? `0${minutes}`:minutes} : {seconds<=9?`0${seconds}`:seconds}</div>
            </div>
          </div>
        </div>
        <Link className="registerLink" to="/register">
          <div className="bottomRegister ">
            <div className="brText">REGISTER NOW!</div>
          </div>
        </Link>
      </div>

      {/* <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button> */}
    </>
  );
};

export default NewTimer;
