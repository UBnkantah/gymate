import React from 'react'
import habimg from "../Images/about-imgg.png"
import { AppStyle } from '../../App.style'
import moa from "../Images/moa.png"
import mob from "../Images/mob.png"
import "./Habout.css"

const Habout = () => {
  return (
    <div className='habout'>
        <div className='img'>
            <img src={habimg} alt="" />
            <div className='motiv'>
                <p>We can help you to overcome the fears and obstacles in your life</p>
            </div>
        </div>
        <div className='content'>
            <p>LET'S INTRODUCE</p>
            <p style={AppStyle.h2}>
                Take You Health And Fitness To New Level of Heights
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit iusto! Facilis consequuntur commodi expedita amet sit, quam rem nobis alias repudiandae aliquid, accusamus minus vel sunt et fugit.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vitae tempore, accusantium saepe porro itaque animi dolorem ducimus ea repudiandae at magnam, deleniti doloremque, ullam voluptate ad. Fugit eius voluptatem, quidem voluptatibus deserunt a dolor?
            </p>
            <div>
                <p>Johon Suanto</p>
                <p>
                    Mr. Johon Smith
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Habout