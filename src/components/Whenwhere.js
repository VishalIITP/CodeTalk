import React from 'react'
import './../App.css'
import './css/Whenwhere.css'

function Whenwhere() {
  return (
    <div>
        <div className="whenwhereblack"></div>
          <div className="whenwhere">
            <div className="when">
              <div className="calendar"></div>
              <div className="date">1st Aug</div>
            </div>
            <div className="where">
              <div className="clock"></div>
              <div className="time">07:00PM</div>
            </div>
          </div>

    </div>
  )
}

export default Whenwhere