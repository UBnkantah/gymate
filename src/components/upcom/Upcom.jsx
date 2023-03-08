import React from 'react'
import run from "../Images/gall-bobuf.png"
import box from "../Images/upcombox.png"
import "./Upcom.css"
import { Link } from 'react-router-dom'

const Upcom = () => {
  return (
    <div className='upcom'>
        <div>
            <h2>Our Featured Classes</h2>
            <p>
                Gymat an unknown printer took galie type anscraey aretea bled make a type specimen bookay survived not onlyive centuries 
            </p>
        </div>
        <div className='container-sess'>
            <div className='class-ses'>
                <div>
                    <h2>Fitness</h2>
                    <p>The Best Body fitness in Town</p>
                </div>
                <div className='img'>
                    <img src={run} alt="" />
                </div>
                <div>
                    <p>Monday: 9:00 am</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upcom