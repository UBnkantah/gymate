import React, { useState } from 'react'
import "../App.css"
// import { db } from '../../firebase';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Form = () => {
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
      const resData = await addDoc(collection(db, "contact"), {fullName, email, classes, comment})
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
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2>Leave Us your Info</h2>
            <input 
              type="text" 
              // name="fullName"
              placeholder='Full Name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              />

            <input 
              type="email" 
              // name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />

            <select className='select'
            value={classes}
            onChange={(e) => setClasses(e.target.value)}
            >
              <option value="">Select Classes</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
              {/* <option value="Body Buiding">Body Building</option>
              <option value="Boxing">Boxing</option>
              <option value="Running">Running</option>
              <option value="Fitness">Fitness</option>
              <option value="Yoga">Yoga</option>
              <option value="Workout">Workout</option>
              <option value="Karate">Karate</option>
              <option value="Meditation">Meditation</option>
              <option value="Cycling">Cycling</option> */}
            </select>

            <textarea 
              name="comment" 
              id="" 
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              cols="30" 
              rows="10"></textarea>
            <div className='check'>
              <input type="checkbox" className='checkbox' name="subscribe"  id="subscribe" />
              <p className="subscribe">Subscribe to Gymate Newsletter</p>
            </div>
            
            <button type="submit" className='form-submit'>{loading ? "Submitting...": "SUBMIT NOW"}</button>
        </form>
    </div>
  )
}

export default Form