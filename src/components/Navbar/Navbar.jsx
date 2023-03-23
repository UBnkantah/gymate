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
        
        <nav ref={NavRef}>
            <Link to="/about" onClick={showNav}>About</Link>
            <Link to="/class" onClick={showNav}>Class</Link>
            <Link to="/gallery" onClick={showNav}>Gallery</Link>
            <Link to="/contact" onClick={showNav}>Contact</Link>
            <Link to="/pricing" onClick={showNav}>Pricing</Link>
            <button className="get_btn" onClick={showNav}>
                <Link to="/contact">
                    START NOW
                </Link>
            </button>
            <button className="navbar_btn navbar_close" onClick={showNav}>
                <FaTimes className="navicon" size={23} />
            </button>
        </nav>
        <button className="navbar_btn" onClick={showNav}>
            <FaBars className="navicon" size={23}/>
        </button>
    </div>
    
  )
}

export default Navbar