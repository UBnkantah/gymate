import {GiCheckMark} from "react-icons/gi"
import {FaLongArrowAltRight} from "react-icons/fa"
import "./MemShip.css"

const MemShip = () => {
  return (
    <div className="memship-container">
        <div>
            <h3>PRICING CHART</h3>
            <h2>Exclusive Membership Plan</h2>
            <p>Gymen an unknown printer took a gallery of type and scrambled make a type secimen book</p>
        </div>
        <div className="memship-cont">
            <div className="mem-card">
                <h2>Beginner</h2>
                <p>Financa dummy text of the printing and typesetting industry.</p>
                <p>$59/For 3 months</p>
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
                <button>
                    PURCHASE NOW 
                    <FaLongArrowAltRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default MemShip