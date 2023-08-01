import React from 'react'
import './css/Btyb.css'
import './../App.css'

function Btyb() {
  return (
    <div>

      <div className="BTYB">
        <div className="btybHeadingbox">
          <div className="btybtext">Brought to you by</div>
        </div>
        <div className="btyblogobox">
          <div className="btyblogo"></div>
          <div className="btybline"></div>
          <div className="btybmentor">
            <div className="btybwith">with</div>
            <div className="btybwithline"></div>
            <div className="btybwithmentorDetails">
              <div className="btybwmtop">Vishal Yadav </div>
              <div className="btybwmleft">B.Tech</div>
              <div className="btybwmright">IIT PATNA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Btyb



