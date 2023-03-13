import React from 'react'
import habimg from "../Images/about-imgg.png"
import { motion, Variant } from 'framer-motion'
import "./Habout.css"

const imgAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
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
  const baseImg={
    offscreen: {y: -100, opacity:0},
    onscreen: {
        y:0,
        opacity: 1,
        transition: {
            type: "string",
            bounce: 0.5,
            duration: 1
        }
    }
  }

const Habout = () => {
  return (
    <motion.div className='habout'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount: 1}}
        // transition={{staggerChildren:0.1}}
    >
        <motion.div className='img'>
            <motion.img
            variants={imgAnimate}
            src={habimg} className="about-img" alt="" />
            <motion.div className='motiv'>
                <motion.p
                variants={txtAnimate}
                className='help'>We can help you to overcome the fears and obstacles in your life</motion.p>
            </motion.div>
        </motion.div>
        <motion.div className='content'>
            <motion.p
                variants={txtAnimate}
            >LET'S INTRODUCE</motion.p>
            <motion.h2
                variants={txtAnimate} 
            >
                Take You Health And Fitness To New Level of Heights
            </motion.h2>
            <motion.p
                variants={txtAnimate}
            className='lor-con'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit iusto! Facilis consequuntur commodi expedita amet sit, quam rem nobis alias repudiandae aliquid, accusamus minus vel sunt et fugit.
            </motion.p>
            <motion.p
                variants={txtAnimate}
            >
               Gymat an unknown printer took a galley of type and scr arsry mbled it to make a type specimen book. It has survived notte only five centuries, but also the leap into electronic types eatting rey emaing essentailly unchanged. It was popularised in the 1960s with the release of Letraset.
            </motion.p>
            <motion.div>
                <motion.p
                    variants={txtAnimate}
                className='name'>Johon Suanto</motion.p>
                <motion.p
                    variants={txtAnimate}
                >
                    Mr. Johon Smith
                    <span>
                        - Founder
                    </span>
                </motion.p>
            </motion.div>
        </motion.div>
        
    </motion.div>
  )
}

export default Habout