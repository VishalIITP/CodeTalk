import React from 'react'
import './../App.css'
import './css/Videobox.css'

function Videobox() {
  return (
    <div>
                  <div className="videobox">
            <div className="playbutton">
              <div className="circleplay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <g filter="url(#filter0_d_116_327)">
                    <circle cx="40" cy="40" r="30" fill="#F2E145" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_116_327"
                      x="0"
                      y="0"
                      width="80"
                      height="80"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect1_dropShadow_116_327"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.995833 0 0 0 0 0.922805 0 0 0 0 0.265556 0 0 0 0.63 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_116_327"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_116_327"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="triangleplay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="36"
                  viewBox="0 0 32 36"
                  fill="none"
                >
                  <g filter="url(#filter0_d_116_355)">
                    <path d="M28 14L4 27.8564V0.143594L28 14Z" fill="black" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_116_355"
                      x="0"
                      y="0.143593"
                      width="32"
                      height="35.7128"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_116_355"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_116_355"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

    </div>
  )
}

export default Videobox