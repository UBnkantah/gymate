import {Link} from "react-router-dom"
import { AppStyle } from '../../App.style'
// import HImg from "../Images/header-img.jpg"
import "./Header.css"

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='contents '>
                <p>FIND YOUR ENERGY</p>
                <h2 style={AppStyle.h2}>STRONGER WITH <span>FIT & PERFECT</span></h2>
                <p>
                    Gymen an unknown printer took a gallery of type and scrambled. it has survived unknown printercenturies.
                </p>
                <button style={AppStyle.mainButton}>
                    <Link to="/class">
                        OUR CLASSES
                    </Link>
                </button>
            </div>
            <div className="bmi-container">
                <div>
                    <h4>CALCULATE BODY</h4>
                    <h2>Calculate Your BMI?</h2>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        
        
        
    </>
  )
}

export default Header