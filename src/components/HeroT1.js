import React, { useEffect, useState } from 'react'
import './../App.css'
import './css/HeroT1.css'

const API_PATH = process.env.REACT_APP_API_PATH;



const HeroT1 = (props) => {
 
  return (
    <div>
      <div className="heroT1">
        <div className="whiteT1">{props.actwebContent.heroT1U}</div>
        <div className="greenT1">{props.actwebContent.heroT1D}</div>
      </div>

    </div>
  )
}

export { HeroT1 };