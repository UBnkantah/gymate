import React from 'react'
import habimg from "../Images/about-imgg.png"
import "./Habout.css"


const Habout = () => {
  return (
    <div className='container habout'>
        <div className='img'>
            <img
            src={habimg} className="about-img" alt="" />
            <div className='motiv'>
                <p
                
                className='help'>We can help you to overcome the fears and obstacles in your life</p>
            </div>
        </div>
        <div className='content container'>
            <p>LET'S INTRODUCE</p>
            <h2>
                Take You Health And Fitness To New Level of Heights
            </h2>
            <p className='lor-con'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit iusto! Facilis consequuntur commodi expedita amet sit, quam rem nobis alias repudiandae aliquid, accusamus minus vel sunt et fugit.
            </p>
            <p
                
            >
               Gymat an unknown printer took a galley of type and scr arsry mbled it to make a type specimen book. It has survived notte only five centuries, but also the leap into electronic types eatting rey emaing essentailly unchanged. It was popularised in the 1960s with the release of Letraset.
            </p>
            <div>
                <p
                    
                className='name'>Johon Suanto</p>
                <p
                    
                >
                    Mr. Johon Smith
                    <span>
                        - Founder
                    </span>
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Habout