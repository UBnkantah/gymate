import {Link} from "react-router-dom"
import HImg from "../Images/hero-img-mob.png"
import "./Header.css"


const Header = () => {
  return (
        <div className='container header'>
            <div className='contents '>
                <p
                >FIND YOUR ENERGY</p>
                <h2 
                >STRONGER WITH <span>FIT & PERFECT</span></h2>
                <p
                >
                    Gymen an unknown printer took a gallery of type and scrambled. it has survived unknown printercenturies.
                </p>
                <button className='class-butt'>
                    <Link to="/class">
                        OUR CLASSES
                    </Link>
                </button>
            </div>
            <div className="contents">
                <img src={HImg} alt="" />
            </div>
        </div>
  )
}

export default Header