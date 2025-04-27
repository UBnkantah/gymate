import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveNav = ({showMenu, setShowMenu}) => {
  return (
    <div>
        <div className={`${showMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white  px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`} onClick={() => setShowMenu(!showMenu)}>
                <div className="flex flex-col items-center justify-between gap-16 pt-12">
                    <Link to="/about"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s] font-[600]">About Us</Link>
                    <Link to="/class"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s] font-[600]">Classes</Link>
                    <Link to="/gallery" className="text-black hover:text-primary transition-all ease-in-out duration-[1s] font-[600]">Gallery</Link>
                    <Link to="/pricing"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s] font-[600]">Pricing</Link>
                    <Link to="/contact"  className="text-black hover:text-primary transition-all ease-in-out duration-[1s] font-[600]">Contact</Link>
                    <Link to="/class">
                <button className="bg-transparent  hover:bg-primary hover:text-white text-primary py-2 px-4 border-2 border-primary font-[600] rounded-lg transition-all ease-in-out duration-[1s]">Get Started</button>    
                    </Link>
                
                </div>
        </div>
    </div>
  )
}

export default ResponsiveNav