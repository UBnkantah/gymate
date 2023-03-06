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
                        <img src={sport.img} className="img-cl" alt="" />
                        <div className='clas-items'>
                            <h2>{sport.type}</h2>
                            <p>
                                <span>
                                    <AiOutlineUser />
                                        {sport.name} 
                                    </span>
                                    <span>
                                        <AiOutlineClockCircle />
                                        {sport.time}
                                    </span>
                                    
                                </p>
                                <p>
                                    The Best Body Fitness in Town Authoritatively disseminate
                                </p>
                                <button>
                                    <Link to="/contact">
                                        JOIN NOW
                                    </Link>
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