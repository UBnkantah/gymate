import React from 'react'
import gymlogo from "../Images/gym-logo.png"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaPhoneAlt} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-flex'>
            <img src={gymlogo} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi iusto corrupti illum tempore veniam saepe maiores, inventore rerum incidunt cupiditate id asperiores alias voluptatibus tenetur repellat? Culpa, ducimus fuga.
            </p>
            <div className='soc-icons'>
                <div>
                    <FaFacebookF />
                </div>
                <div>
                    <FaTwitter />
                </div>
                <div>
                    <FaLinkedinIn />
                </div>
                <div>
                    <FaYoutube />
                </div>
                <div>
                    <FaInstagram />
                </div>
            </div>
        </div>
        <div className='footer-flex'>
            <h2 className='cla-header'>
                Our Classes
            </h2>
            <p>Fitness Classes</p>
            <p>Aerobics Classes</p>
            <p>Power Yoga</p>
            <p>Lean Machines</p>
            <p>Full-Body Strength</p>
        </div>
        <div className='footer-flex'>
            <h2 className='cla-header'>
                Quick Links
            </h2>
            <p>Fitness Classes</p>
            <p>Aerobics Classes</p>
            <p>Power Yoga</p>
            <p>Lean Machines</p>
            <p>Full-Body Strength</p>
        </div>
        <div className='footer-flex'>
            <h2 className='cla-header'>
                Gymat Location
            </h2>
            <p>
                178 West 27th Street, Suite 527, New Your NY 10012 United States
            </p>
            <p>
                <FaPhoneAlt />
                +1-234-5678901
            </p>
            <p>
                gymat@yourname.com
            </p>
        </div>
    </div>
  )
}

export default Footer