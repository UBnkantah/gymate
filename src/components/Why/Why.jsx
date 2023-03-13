import React from 'react'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {solid, regular, icon, brands, light} from "@fortawesome/fontawesome-svg-core/import.macro"
// import {faEnvelope, faMattressPillow, faToiletPaper, faCalendarDays, faToolbox } from "@fortawesome/free-solid-svg-icons"
import { routine } from '../Data/Data'
import "./Why.css"

const Why = () => {
  return (
    <div className='why'>
        {routine.map((rou) => {
            return (
            <div className='det' key={rou.id}>
                {rou.ics}
                <h2>{rou.name}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor deserunt nulla, alias beatae voluptatibus.</p>
        </div>
            )
        })}
        
        
    </div>

    
  )
}

export default Why