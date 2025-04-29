import gymlogo from "./Images/gymat_light.svg"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaPhoneAlt} from "react-icons/fa"
import "../App.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-black text-white">
        <div className="container">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-start gap-4 md:gap-8 pb-8 pt-4'>
        <div className='w-full'>
            <Link to={'/'}>
            <img src={gymlogo} alt="" className="w-24 md:w-36 h-20"/>
            </Link>
            
            <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi iusto corrupti illum tempore veniam saepe maiores, inventore rerum incidunt cupiditate id asperiores alias voluptatibus tenetur repellat? Culpa, ducimus fuga.
            </p>
            <div className='flex flex-row gap-4 items-center pt-4'>
                <Link to={'https://www.facebook.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-2 cursor-pointer shadow bg-neutral-800">
                    <FaFacebookF size={22}/>
                </Link>
                <Link to={'https://www.x.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-2 cursor-pointer shadow bg-neutral-800">
                    <FaTwitter size={22}/>
                </Link>
                <Link to={'https://www.linkedin.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-2 cursor-pointer shadow bg-neutral-800">
                    <FaLinkedinIn size={22}/>
                </Link>
                <Link to={'https://www.youtube.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-2 cursor-pointer shadow bg-neutral-800">
                    <FaYoutube size={22}/>
                </Link>
                <Link to={'https://www.facebook.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-2 cursor-pointer shadow bg-neutral-800">
                    <FaInstagram size={22}/>
                </Link>
            </div>
        </div>
        <div className='w-full pt-0 md:pt-4'>
            <h5 className="text-2xl pb-2">
                Our Classes
            </h5>
            <ul className="">
                <li>Fitness Classes</li>
                <li>Aerobics Classes</li>
                <li>Power Yoga</li>
            </ul>
            <p></p>
            <p></p>
            <p></p>
            <p>Lean Machines</p>
            <p>Full-Body Strength</p>
        </div>
        <div className='w-full pt-0 md:pt-4'>
            <h5 className="text-2xl pb-2">
                Quick Links
            </h5>
            <ul>
                <li>Fitness Classes</li>
                <li>Aerobics Classes</li>
                <li>Power Yoga</li>
                <li>Lean Machines</li>
                <li>Full-Body Strength</li>
            </ul>
        </div>
        <div className='w-full pt-0 md:pt-4'>
            <h5 className="text-2xl pb-2">
                Gymat Location
            </h5>
            <ul className="flex flex-col gap-1">
                <li>178 West 27th Street, Suite 527, New Your NY 10012 United States</li>
                <li className="flex flex-row items-center gap-2"><FaPhoneAlt />
                +1-234-5678901</li>
                <li>gymat@yourname.com</li>
            </ul>
        </div>
    </div>        
        </div>
    </div>
    
  )
}

export default Footer