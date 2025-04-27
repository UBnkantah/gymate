import {useState } from "react"
import {Link } from "react-router-dom"
import Logo from "../Images/gymat_dark.svg"
import ResponsiveNav from "./ResponsiveNav"
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi"
import "./Navbar.css"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div>
   <div className="bg-white text-black w-full z-20 shadow-xl">
        <div className="container">
      <div className="flex flex-row items-center justify-between py-2">
        <Link to="/">
          <img src={Logo} alt="" className="w-24 md:w-36 h-20" />
        </Link>
        <nav className="hidden md:flex flex-row gap-6 font-[600]">
          <Link to="/about"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s]">About</Link>
          <Link to="/class"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s]">Classes</Link>
          <Link to="/gallery"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s]">Gallery</Link>
          <Link to="/pricing"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s]">Pricing</Link>
          <Link to="/contact"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s]">Contact</Link>
        </nav>
        <div className="flex flex-row gap-2 items-center">
          <div className="hidden md:block">
          <Link to="/contact">
          <button className="bg-transparent text-sm md:text-md hover:bg-primary hover:text-white text-primary py-1 md:py-2 px-2 md:px-4 border-2 border-primary font-[600] rounded-lg transition-all ease-in-out duration-[1s]">Join Class Now</button>
          </Link>
          </div>
          {/* Mobile Toggle */}
          <div className="block md:hidden">
            {showMenu ? (
              <HiMenuAlt1  onClick={toggleMenu} className="cursor-pointer transition-all text-black" size={30} />
            ): (
              <HiMenuAlt3  onClick={toggleMenu} className="cursor-pointer transition-all text-black" size={30} />
            )}
          </div>
        </div>
      </div>         
        </div>
     
    </div>
    <ResponsiveNav showMenu={showMenu}  setShowMenu={setShowMenu}  />   
    </div>
    
  )
}

export default Navbar