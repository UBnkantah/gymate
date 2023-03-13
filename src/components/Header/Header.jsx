import {Link} from "react-router-dom"
import { Variant, motion } from "framer-motion"
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
        <motion.div className='header'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:1}}
        transition={{staggerChildren:0.5}}
        >
            <motion.div className='contents '>
                <motion.p
                variants={txtAnimate}
                >FIND YOUR ENERGY</motion.p>
                <motion.h2 
                variants={txtAnimate}
                >STRONGER WITH <span>FIT & PERFECT</span></motion.h2>
                <motion.p
                variants={txtAnimate}
                >
                    Gymen an unknown printer took a gallery of type and scrambled. it has survived unknown printercenturies.
                </motion.p>
                <motion.button
                variants={txtAnimate}
                >
                    <Link to="/class">
                        OUR CLASSES
                    </Link>
                </motion.button>
            </motion.div>
            <motion.div className="contents"
            variants={imgAnimate}
            >
                <img src={HImg} alt="" />
            </motion.div>
        </motion.div>
  )
}

export default Header