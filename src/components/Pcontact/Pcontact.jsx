import {FaFacebookF, FaTwitter, FaInstagram, FaPinterest} from "react-icons/fa"
import { useState } from "react"
import { db } from "../../firebase"
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const Pcontact = () => {
  const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [classes, setClasses] = useState("")
    const [comment, setComment] = useState("")
    const [loading, setLoading] = useState(false)
    const options = ["Body Building", "Boxing", "Running", "Fitness", "Yoga", "Workout", "Karate", "Meditation", "Cycling"]
  
  
    
    const handleSubmit = async(e) => {
      e.preventDefault()
      setLoading(true)
      try{
         await addDoc(collection(db, "contact"), {fullName, email, classes, comment})
        setClasses("")
        setComment("")
        setFullName("")
        setEmail("")
        toast.success(`Message Received ${fullName}, Our Team will get back to you shortly`, {position: "bottom-left"})
  
        // console.log(resData)
        setLoading(false)
      }catch(err){
        throw new Error(err)
      }
    }
  
  return (
    <div className="container">
      <div className="grid grid-cols-1 py-12 md:grid-cols-2 gap-4 md:gap-8 justify-start items-center">
      <div>
        <div className="flex flex-col gap-2 items-start">
                    <h5 className="text-xl md:text-4xl font-[700]">
                        We Are Here For Help you! To Shape Your Body
                    </h5>
                    <p>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic types etting.type specimen It has survived not only five centuries, but also the type specimen book.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-start py-2">
                    <div className="w-full">
                        <h3 className="text-lg font-[600]">New York City, USA</h3>
                        <hr className="w-1/3 bg-primary h-1"/>
                        <p>85 Briston Mint Street</p>
                        <p>London, E1 8LG, USA</p>
                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-[600]">Opening Hours</h3>
                        <hr className="w-1/3 bg-primary h-1"/>
                        <p>Mon to Fri 7:30am - 1:00am</p>
                        <p>Mon to Fri 7:30am - 1:00am</p>
                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-[600]">Information</h3>
                        <hr className="w-1/3 bg-primary h-1"/>
                        <p>+800-123-4567</p>
                        <p>gymat@yourname.com</p>
                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-[600]">Follow Us On</h3>
                        <hr className="w-1/3 bg-primary h-1"/>
                        <div className="flex flex-row gap-4 items-center pt-4">
                            <Link to={'https://www.facebook.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-1.5 cursor-pointer shadow bg-neutral-200">
                                                <FaFacebookF size={20}/>
                                            </Link>
                                            <Link to={'https://www.facebook.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-1.5 cursor-pointer shadow bg-neutral-200">
                                            <FaTwitter size={20}/>
                                            </Link>
                                            <Link to={'https://www.facebook.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-1.5 cursor-pointer shadow bg-neutral-200">
                                            <FaInstagram size={20}/>
                                            </Link>
                                            <Link to={'https://www.facebook.com/'} target="_blank" className="transition ease-in-out hover:bg-[#ff0336] duration-[1s] rounded-full p-1.5 cursor-pointer shadow bg-neutral-200">
                                            <FaPinterest size={20}/>
                                            </Link>
                            
                        </div>
                    </div>
                </div>
                
      </div>
        <div className='w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full items-start justify-center'>
          <h2 className="text-start">Leave Us your Info</h2>
            <input 
              type="text" 
              // name="fullName"
              placeholder='Full Name'
              value={fullName}
              className='w-full border border-black rounded p-2'
              onChange={(e) => setFullName(e.target.value)}
              />

            <input 
              type="email" 
              // name="email"
              value={email}
              className='w-full border border-black rounded p-2'
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />

            <select className='w-full bg-white border border-black outline-none rounded p-2 cursor-pointer '
            value={classes}
            onChange={(e) => setClasses(e.target.value)}
            >
              <option value="">Select Classes</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>

            <textarea 
              name="comment" 
              id="" 
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              className='w-full h-[300px] border border-black rounded'></textarea>
            <div className='flex flex-row items-center w-full justify-start gap-2'>
              <input type="checkbox"  name="subscribe"  id="subscribe" />
              <p className="text-sm font-[500]">Subscribe to Gymate Newsletter</p>
            </div>
            
            <button type="submit" className='bg-primary w-full py-2 md:py-3 font-[600] rounded text-white cursor-pointer border-none'>{loading ? "Submitting...": "SUBMIT NOW"}</button>
        </form>
    </div> 
    </div>
    </div>
    
  )
}

export default Pcontact