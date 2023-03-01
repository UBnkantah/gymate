import React from 'react'
import habimg from "../Images/habout-img.png"
import moa from "../Images/moa.png"
import mob from "../Images/mob.png"
import "./Habout.css"

const Habout = () => {
  return (
    <div className='habout'>
        <div className='img'>
            <img src={habimg} alt="" />
        </div>
        <div className='content flex flex-col'>
            <p>ABOUT GYMAT</p>
            <p>
                We Can Give A Shape Of Your Body Here
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit iusto! Facilis consequuntur commodi expedita amet sit, quam rem nobis alias repudiandae aliquid, accusamus minus vel sunt et fugit ad maiores omnis vero voluptatem reiciendis. Odit amet quas voluptate dolore.
            </p>
            <div className='flex'>
                <div>
                    <img src={moa} alt="" />
                </div>
                <div className='item'>
                    <p>Modern Equipment</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, ducimus.</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={mob} alt="" />
                </div>
                <div>
                    <p>Body Fitness</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, ducimus.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Habout