// eslint-disable no-use-before-define
import React from 'react'
import "./Upcom.css"
import  {OFC} from "../Data/Data"

const Upcom = () => {
  return (
    <div className='upcom'>
        <div className='upcom-header'>
            <h2>Our Featured Classes</h2>
            <p>
                Gymat an unknown printer took galie type anscraey aretea bled make a type specimen bookay survived not onlyive centuries 
            </p>
        </div>
        <div className='container-sess'>
            {OFC.map((body) => {
                return(
                <div className='class-ses' key={body.id}>
                    <div className='title-cla'>
                        <h2>{body.head}</h2>
                        <p>The Best Body fitness in Town</p>
                        <div className="spo-icon">
                            {body.icon}
                        </div>
                    </div>
                    <div className='img'>
                        <img src={body.img} alt="" />
                    </div>
                    <div className='cla-time'>
                        <p>{body.date}</p>
                    </div>
                </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default Upcom