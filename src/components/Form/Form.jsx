import React, { useState } from 'react'
import "./Form.css"
import { db } from '../../firebase';

const Form = () => {
  const [formData, setFormData] = useState({
          fullName: "",
          email: "",
          classes: "",
          subscribe: true,
          comment: ""
  });

  const handleChange  = (e) => {
  
    const {name, value, type, checked} = e.target

    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value 
      }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    db.collection("contact").add({
      formData: formData
    }).then(() => {
      alert('Message Sent')
    }).catch((err) => {
      alert(err.message)
    })

    setFormData({
      fullName: "",
      email: "",
      classes: "",
      subscribe: true,
      comment: ""
    })
  }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2>Leave Us your Info</h2>
            <input 
              type="text" 
              name="fullName"
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              />

            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />

            <select name="classes" className='select' id="classes"
            value={formData.classes}
            onChange={handleChange}
            >
              <option value="">Select Classes</option>
              <option value="Body Buiding">Body Building</option>
              <option value="Boxing">Boxing</option>
              <option value="Running">Running</option>
              <option value="Fitness">Fitness</option>
              <option value="Yoga">Yoga</option>
              <option value="Workout">Workout</option>
              <option value="Karate">Karate</option>
              <option value="Meditation">Meditation</option>
              <option value="Cycling">Cycling</option>
            </select>

            <textarea 
              name="comment" 
              id="" 
              onChange={handleChange}
              cols="30" 
              rows="10"></textarea>
            <div className='check'>
              <input type="checkbox" className='checkbox' name="subscribe"  id="subscribe" />
              <p className="subscribe">Subscribe to Gymate Newsletter</p>
            </div>
            
            <button type="submit" className='form-submit'>SUBMIT NOW</button>
        </form>
    </div>
  )
}

export default Form