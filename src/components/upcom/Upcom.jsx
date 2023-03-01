import React from 'react'
import run from "../Images/upcomrun.png"
import box from "../Images/upcombox.png"
import "./Upcom.css"
import { Link } from 'react-router-dom'

const Upcom = () => {
  return (
    <div className='upcom'>
        <div>
            <p>UPCOMING CLASS</p>
            <h2>We Offer Body Changes Classes</h2>
            <p>
                Gymat an unknown printer took galie type anscraey aretea bled make a type specimen bookay survived not onlyive centuries 
            </p>
            <button>
                <Link to="/class">
                    See More
                </Link>
            </button>
        </div>
        <div>
            <img src={run} alt="" />
        </div>
        <div>
            <img src={box} alt="" />
        </div>
    </div>
  )
}

export default Upcom