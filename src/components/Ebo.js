import React from "react";
import "./../App.css";
import './css/Ebo.css'

const Ebo = () => {
    const [x, setX] = React.useState(true);
  const handleClick = () => {
    setX(false);
  };

  return (
    <>
      <div className="EBOgreenblack" style={{ display: x ? "block" : "none" }}>
        <div className="EBOgreen">
          <div className="EBOtext">
            🔥 Early Bird Offer : Price resets to Rs. 999 when the timer below
            hits 0.
          </div>
          <div className="cross" onClick={handleClick}></div>
        </div>
      </div>
    </>
  );
};

export default Ebo;
