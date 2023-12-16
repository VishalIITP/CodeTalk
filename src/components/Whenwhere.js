import React from 'react'
import './../App.css'
import './css/Whenwhere.css'


function Whenwhere(props) {
  const wwDate=props.actwebContent.date;
  const wwTime=props.actwebContent.time;
  return (
    <div>
        <div className="whenwhereblack"></div>
          <div className="whenwhere">
            <div className="when">
              <div className="calendar"></div>
              <div className="date">{wwDate}</div>
            </div>
            <div className="where">
              <div className="clock"></div>
              <div className="time">{wwTime}</div>
            </div>
          </div>

    </div>
  )
}

export default Whenwhere