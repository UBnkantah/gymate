import HImg from "../Images/hero-img-mob.png"
import "./Header.css"
import { AniButton } from "../../ui"


const Header = () => {
  return (
        <div className='bg-headerimg bg-black backdrop-brightness-50 bg-top bg-cover bg-no-repeat min-h-[85vh]'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 my-auto mx-0 md:mx-12 pt-12">
            <div className='text-white flex flex-col gap-4 items-start w-full'>
                <p
                >FIND YOUR ENERGY</p>
                <h2 
                >STRONGER WITH <span>FIT & PERFECT</span></h2>
                <p
                >
                    Gymen an unknown printer took a gallery of type and scrambled. it has survived unknown printercenturies.
                </p>
                <AniButton />
                {/* <button className='class-butt'>
                    <Link to="/class">
                        OUR CLASSES
                    </Link>
                </button> */}
            </div>
            <div className="">
                <img src={HImg} alt="" className="block md:hidden" />
            </div>        
                </div>
            </div>
            
        </div>
  )
}

export default Header