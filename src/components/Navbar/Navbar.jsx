import { useRef } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../Images/gym-logo.png"
import "./Navbar.css"

const Navbar = () => {
    const NavRef = useRef();

    const showNav = () => {
        NavRef.current.classList.toggle("responsive_navbar")
    }

  return (
    <div className="navbar">
        <div className="log">
            <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
        
        <nav>
            <Link to="/about">About</Link>
            <Link to="/class">Class</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pricing">Pricing</Link>
            <button className="get_btn">
                <Link to="/contact">
                    Join Our Class Now
                </Link>
            </button>
            <button className="navbar_btn navbar_close" onClick={showNav}>
                <FaTimes />
            </button>
        </nav>
        <button className="navbar_btn" onClick={showNav}>
            <FaBars />
        </button>
    </div>
    
  )
}

export default Navbar