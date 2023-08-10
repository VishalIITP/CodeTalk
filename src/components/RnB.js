import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/RnB.css'
import './../App.css'

import { price,strikePrice,timerTime} from '../Navs/Globalvars';

const NewTimer = () => {
  const [timerValue, setTimerValue] = useState(() => {
    const savedValue = sessionStorage.getItem('timerValue');
    return savedValue ? parseInt(savedValue, 10) : 3700; // Change the initial value to 3700 seconds
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
    setTimerValue(3700); // Reset the timer to 3700 seconds
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
      setInterval(resetTimer,30000); // Start the timer agian when it reaches 0
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timerValue]);

  // Store the timer value in sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('timerValue', timerValue.toString());
  }, [timerValue]);

  let hours=Math.floor(timerValue/3600);
  let minutes=Math.floor((timerValue%3600)/60);
  let seconds=(timerValue%3600)%60;

  return (
    <>

      <div className="RegisterNow rnb">
            <Link className="registerLink" to="/register">
              <div className="registerbutton">
                <div className="registerText">
                  Register now for {timerValue? <span>₹{price} <strike>₹{strikePrice}</strike></span>:'₹999'}
                </div>
              </div>
            </Link>
            <div className="timerbox">
              <div className="timerText">
                <div className="offertext"><div className='line'></div>offer ends in</div>
      <div className='timer'>{hours<=9? `0${hours}`:hours}:{minutes<=9? `0${minutes}`:minutes} : {seconds<=9?`0${seconds}`:seconds}</div>
              </div>
            </div>
          </div>


      {/* <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button> */}
    </>
  );
};





export default NewTimer;
