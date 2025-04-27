import React from 'react'
import { AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "../App.css"

const ClassCard = ({img, name, time, type}) => {
  return (
    <div className='classes-container w-full overflow-hidden rounded-lg h-[400px]'>
                            <div className="img">
                                <img src={img} className="img-cl" alt="" />
                            </div>
                            <div className='clas-items'>
                                <div className="first-item">
                                    <h2 
                                    className="cla-header"
                                    >{type}</h2>
                                    <p className='pt-20 inline'>
                                        <span className='mr-20'>
                                            <AiOutlineUser />
                                            {name} 
                                        </span>
                                        <span className='mr-20'>
                                            <AiOutlineClockCircle />
                                            {time}
                                        </span>
                                            
                                    </p>
                                </div>
                                <div className='second-item'>
                                    <p className='under'>
                                        The Best Body Fitness in Town Authoritatively disseminate
                                    </p>
                                </div>
                                    
                                    <button className='class-butt'>
                                        <Link to="/contact">
                                            JOIN NOW
                                        </Link>
                                        <span className="border-behind"></span>
                                    </button>
                            </div>   
                        </div>
  )
}

export default ClassCard