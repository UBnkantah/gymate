import {Link} from "react-router-dom"
import HImg from "../Images/hero-img-mob.png"
import "./Header.css"

const imgAnimate ={
    offScreen:{x: -100, opacity: 0},
    onScreen: {
        x:0,
        opacity: 1,
        rotate:[0,10,0],
        transition: {type: "string",
        bounce: 0.5,
        duration: 1
    }
    }
}

const txtAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity: 1,
    transition: {type: "string",
      bounce: 0.4,
      duration: 1
    }
    }
  }

const Header = () => {
  return (
        <div className='container header'>
            <div className='contents '>
                <p
                variants={txtAnimate}
                >FIND YOUR ENERGY</p>
                <h2 
                variants={txtAnimate}
                >STRONGER WITH <span>FIT & PERFECT</span></h2>
                <p
                variants={txtAnimate}
                >
                    Gymen an unknown printer took a gallery of type and scrambled. it has survived unknown printercenturies.
                </p>
                <button
                variants={txtAnimate}
                >
                    <Link to="/class">
                        OUR CLASSES
                    </Link>
                </button>
            </div>
            <div className="contents"
            variants={imgAnimate}
            >
                <img src={HImg} alt="" />
            </div>
        </div>
  )
}

export default Header