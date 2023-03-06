import Gallbut from "./Gallbut"
import {gallOne} from "../Data/Data"
import "./Gallone.css"

const Gallone = () => {
  return (
    <>
        <div className='gal-mai-container'>
            {gallOne.map((gall) => {
                return(
                    <div className='mai-container' key={gall.id}>
                        <img src={gall.img} alt="" className="gal-img"/>
                        <div className="overlay">
                            <h2>{gall.name}</h2>
                            <p>{gall.txt}</p>
                        </div>
                    </div>
                )
            })} 
        </div>
        <Gallbut />
    </>
    
  )
}

export default Gallone