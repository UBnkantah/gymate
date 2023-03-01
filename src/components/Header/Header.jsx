import React from 'react'
import HImg from "../Images/header-img.jpg"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='contents'>
            <p>FIND YOUR ENERGY</p>
            <h2>MAKE YOUR BODY HEALTHY & FIT</h2>
            <p>
                Gymen an unknown printer took a gallery of type and scrambled. it has survived unknown printercenturies.
            </p>
            <button>
                OUR CLASSES
            </button>
        </div>
        <div className='contents'>
            <img src={HImg} alt="" />
        </div>
        
    </div>
  )
}

export default Header