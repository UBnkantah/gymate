import { AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ClassesBut from "./ClassesBut"
import { ClasTwo } from '../Data/Data'
import "./Classes.css"

const ClassTwo = () => {
  return (
    <>
      <div className='main-container'>
        {ClasTwo.map((sport) => {
          return(
            <div className="classes-container" key={sport.id}>
              <img src={sport.img} alt="" className="img-cl" />
              <div className="clas-items">
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

export default ClassTwo