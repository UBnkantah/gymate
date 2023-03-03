import React from 'react'
import habimg from "../Images/habout-img.png"
import { AppStyle } from '../../App.style'
import moa from "../Images/moa.png"
import mob from "../Images/mob.png"
import "./Habout.css"

const Habout = () => {
  return (
    <div className='habout'>
        <div className='img'>
            <img src={habimg} alt="" />
        </div>
        <div className='content'>
            <p>ABOUT GYMAT</p>
            <p style={AppStyle.h2}>
                We Can Give A Shape Of Your Body Here
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit iusto! Facilis consequuntur commodi expedita amet sit, quam rem nobis alias repudiandae aliquid, accusamus minus vel sunt et fugit ad maiores omnis vero voluptatem reiciendis. Odit amet quas voluptate dolore.
            </p>
            <div className='mid'>
                <img src={moa} alt="" />
                <div className='item'>
                    <ul>
                        <li>Modern Equipment</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorum?</li>
                    </ul>
                </div>
            </div>
            <div className='mid'>
                <img src={mob} alt="" />
                <ul>
                    <li>Modern Equipment</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorum?</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Habout