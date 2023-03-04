import React from 'react'
import { AppStyle } from '../../App.style'
import HImg from "../Images/header-img.jpg"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='contents '>
            <p>FIND YOUR ENERGY</p>
            <h2 style={AppStyle.h2}>MAKE YOUR BODY HEALTHY & FIT</h2>
            <p>
                Gymen an unknown printer took a gallery of type and scrambled. it has survived unknown printercenturies.
            </p>
            <button style={AppStyle.mainButton}>
                OUR CLASSES
            </button>
        </div>
        <div className='contents imgd'>
            <img src={HImg} alt="" />
        </div>
        
    </div>
  )
}

export default Header