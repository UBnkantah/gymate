import { gallTwo } from "../Data/Data"
import Gallbut from "./Gallbut"
import "../../App.css"

const GallTwo = () => {
  return (
    <>
        <div className="gal-mai-container">
            {gallTwo.map((galt) => {
                return(
                <div className="mai-container" key={galt.id}>
                    <img src={galt.img} alt="" className="gal-img" />
                    <div className="overlay">
                        <h2>{galt.name}</h2>
                        <p>{galt.txt}</p>
                    </div>
                </div> 
                )
            })}
        </div>
        <Gallbut />
    </>
  )
}

export default GallTwo