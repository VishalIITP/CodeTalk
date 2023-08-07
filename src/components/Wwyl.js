import React from 'react'
import './../App.css'
import './css/Wwyl.css'

function Wwyl() {
  return (
    <div>
        
        <div className="WWYL">
            <span className="wwylwhite"> What will you learn in the </span>
            <span className="wwylgreen">Bootcamp?</span>
            <div className="wwylcards">
              <div className="wwylcard">
              <div className='imagePart'><div className="wwylcImg1"></div>
                <div className="wwylcline"></div></div>
                <div className="wwylctext">
                  <div className="wwylctheading">Precision Code</div>
                  <div className="wwylctdis">You will be guided to write elegant and practical code through discussions, 
                  live coding, and hands-on experience.No more tangled scripts. 
                  No more bewildering bugs. Join CodeTalk and let's sculpt a coding masterpiece 
                  that resonates with precision. </div>
                </div>
              </div>
              <div className="wwylcard">
              <div className='imagePart'><div className="wwylcImg2"></div>
                <div className="wwylcline"></div></div>
                <div className="wwylctext">
                  <div className="wwylctheading">Daily Discipline</div>
                  <div className="wwylctdis">Consistency is key, and at CodeTalk, we instill the habit of daily coding practice.
                   Our program encourages you to code every day, helping you build a strong foundation and a disciplined 
                   approach to problem-solving. Harness the power of consistent practice to skyrocket your confidence and 
                   performance. </div>
                </div>
              </div>
              <div className="wwylcard">
              <div className='imagePart'><div className="wwylcImg3"></div>
                <div className="wwylcline"></div></div>
                
                <div className="wwylctext">
                  <div className="wwylctheading">Clear Roadmap</div>
                  <div className="wwylctdis">We understand that the journey to DSA excellence can be overwhelming.
                  That's why we've curated a structured roadmap that guides you through every step.
                  From arrays to dynamic programming, our roadmap is designed to cover the full syllabus for
                  DSA asked in placements. With CodeTalk, you won't miss a beat on your path to mastery.</div>
                </div>
              </div>
              <div className="wwylcard">
                <div className='imagePart'><div className="wwylcImg4"></div>
                <div className="wwylcline"></div></div>
                <div className="wwylctext">
                  <div className="wwylctheading">Accelerated Learning </div>
                  <div className="wwylctdis">Time is of the essence, and we respect that. CodeTalk's intensive 4-week program is strategically designed to deliver maximum learning in a condensed timeframe. 
                  You'll cover the entire DSA syllabus relevant to placements, empowering you to tackle even the most challenging interview questions with confidence.</div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Wwyl