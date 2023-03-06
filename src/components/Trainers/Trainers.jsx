//eslint
import {traineirs} from '../Data/Data'
import { FaTwitter, FaFacebookF, FaBehance, FaInstagram } from 'react-icons/fa'
// import boyi from "../Images/trainer-yoga.png"
import './Trainers.css'

const Trainers = () => {
  return (
    <div className='trainers'>
      <p>Top Trainers</p>
      <h2>Meet Our Experienced Cool Trainers</h2>
      
          <div >
            <div className='dive'>
              {traineirs.map((tra) => {
                  return(
                  <div className='train-item' key={tra.id}>
                    <div>
                      <p>{tra.name}</p>
                      <p>{tra.title}</p>
                      <div className='divSoc'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaBehance />
                        <FaInstagram />
                      </div>
                    </div>
                    <div className='t-img'>
                      <img  src={tra.img} className="set-img" alt="" />
                    </div>
                  </div>
                )
              })}
            </div>
            
          </div>  
     
      
    </div>
  )
}

export default Trainers