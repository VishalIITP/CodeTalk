import React from 'react'
import './../App.css'
import './css/HeroT2.css'


function HeroT2(props) {

  return (
    <div>
        <div className="heroT2">{props.actwebContent.heroT2U}<br/>{props.actwebContent.heroT2D}</div>
    </div>
  )
}

export default HeroT2