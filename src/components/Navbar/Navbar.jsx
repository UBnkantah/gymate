import { useRef } from "react"
import { NavLink } from "react-router-dom"
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
            <NavLink to="/"><img src={Logo} alt="" /></NavLink>
        </div>
        
        <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/class">Class</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/contact">Pricing</NavLink>
            <button className="get_btn">
                <NavLink to="/join">
                    Join Our Class Now
                </NavLink>
            </button>
            <button className="navbar_btn navbar_close" onClick={showNav}>
                <FaTimes />
            </button>
        </nav>
        <button className="navbar_btn">
            <FaBars />
        </button>
    </div>
    
  )
}

export default Navbar