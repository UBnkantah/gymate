import React from 'react'
import { FaTwitter, FaFacebookF, FaBehance, FaInstagram } from 'react-icons/fa'

const Trainers = () => {
  return (
    <div>
        <p>Top Trainers</p>
        <h2>Meet Our Experienced Cool Trainers</h2>
        <div>
            <div>
                <p>Dorian Yates</p>
                <p>Yoga Trainer</p>
                <hr />
                <div>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaBehance />
                    <FaInstagram />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trainers