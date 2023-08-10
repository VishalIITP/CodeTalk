import React from 'react'
import './../App.css'
import './css/Whenwhere.css'
import { wwDate,wwTime } from '../Navs/Globalvars'

function Whenwhere() {
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