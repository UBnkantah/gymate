import {GiCheckMark} from "react-icons/gi"
import {FaLongArrowAltRight} from "react-icons/fa"
import abtg from "../Images/abo-mis.jpg"
import { plans } from "../Data/Data"
import "./MemShip.css"

const MemShip = () => {
  return (
    <div className="memship-container">
        <div className="mem-title">
            <h3>PRICING CHART</h3>
            <h2>Exclusive Membership Plan</h2>
            <p>Gymen an unknown printer took a gallery of type and scrambled make a type secimen book</p>
        </div>
        <div className="cont-sub">
            {plans.map((sub) => {
                return (

                    <div className="memship-cont" key={sub.id}>
                        <div className="mem-bck">
                            <img src={sub.img} alt="" />
                        </div>
                        <div className="mem-card">
                            <h2>{sub.title}</h2>
                            <p>Financa dummy text of the printing and typesetting industry.</p>
                            <p>$ <span>{sub.amount}</span> /For <span>{sub.time}</span> months</p>
                            <p>
                                <GiCheckMark />
                                Free Hand
                            </p>
                            <p>
                                <GiCheckMark />
                                Gym Fitness
                            </p>
                            <p>
                                <GiCheckMark />
                                Weight Loss
                            </p>
                            <p>
                                <GiCheckMark />
                                Personal Trainer
                            </p>
                            <p>
                                <GiCheckMark />
                                Cycling
                            </p>
                            <button className='class-butt'>
                                PURCHASE NOW 
                                <FaLongArrowAltRight />
                            </button>
                        </div>
                    </div>
                
                )
            })}
        </div>
    </div>
  )
}

export default MemShip