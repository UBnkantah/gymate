import React from 'react'
import moa from "../Images/moa.png"
import mob from "../Images/mob.png"
import "./Why.css"

const Why = () => {
  return (
    <div className='why'>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h3>WHY CHOOSE US</h3>
            <h2>
                Why Choose Us to Join Our Classes
            </h2>
            <p>
                Gymat an unknown printer took galie type anscraey aretea bled make a type
                specimen bookayurived not onlyive centuries Gymat an unknown printer took
                galle type anscraey.
            </p>
            <div>
                <div>
                    <img src={moa} alt="" />
                    <h2>Modern Equipment</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero.
                    </p>
                </div>
                <div>
                    <img src={mob} alt="" />
                    <h2>Weight Balance</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, dolore!
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h1>10+</h1>
                    <p>Expert Trainer</p>
                </div>
                <div>
                    <h1>500+</h1>
                    <p>Trainer Students</p>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Why