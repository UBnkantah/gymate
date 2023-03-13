import {AiOutlineUser, AiOutlineClockCircle} from 'react-icons/ai'
import { ClasOne } from '../Data/Data' 
import ClassesBut from './ClassesBut'
import {Link} from "react-router-dom"
import "./Classes.css"

const Classes = () => {
  return (
    <>
        <div className='main-container'> 
            {ClasOne.map((sport) => {
                return(
                    <div className='classes-container' key={sport.id}>
                        <div className="img">
                            <img src={sport.img} className="img-cl" alt="" />
                        </div>
                        <div className='clas-items'>
                            <div className="first-item">
                                <h2>{sport.type}</h2>
                                <p className='subheading'>
                                    <span className='coach'>
                                        <AiOutlineUser />
                                        {sport.name} 
                                    </span>
                                    <span className='coach'>
                                        <AiOutlineClockCircle />
                                        {sport.time}
                                    </span>
                                        
                                </p>
                            </div>
                            <div className='second-item'>
                                <p className='under'>
                                    The Best Body Fitness in Town Authoritatively disseminate
                                </p>
                            </div>
                                
                                <button>
                                    <Link to="/contact">
                                        JOIN NOW
                                    </Link>
                                    <span className="border-behind"></span>
                                </button>
                        </div>   
                    </div>
                )
            })}
            
        </div>
        <ClassesBut />
    </>
    
  )
}

export default Classes