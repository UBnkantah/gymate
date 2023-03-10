import React from 'react'
import CaoImg from "../Images/about-img.jpg"
import {coachesEx} from "../Data/Data"
import "./Coaches.css"

const Coaches = () => {
  return (
    <div className='coaches-container'>
        <div className='coach-header'>
            <h2>Team Of Expert Coaches</h2>
            <p>Gymat an unknown printer took a gallery of type and scrambled make a type specimen book</p>
        </div>
        <div className="coach-con">
            {coachesEx.map((coach) => {
                return(
                <div className='coach-img' key={coach.id}>
                    <img src={coach.img} alt="" />
                    <div className='coach-tit'>
                        <h2>{coach.name}</h2>
                        <p>{coach.title}</p>
                    </div>
                </div>
                )
            })}
            
        </div>
            
    </div>
  )
}

export default Coaches