import {traineirs} from '../Data/Data'
import { FaTwitter, FaFacebookF, FaBehance, FaInstagram } from 'react-icons/fa'
import boyi from "../Images/trainer-yoga.png"
import { trainerstyle } from './Trainers.style'

const Trainers = () => {
  return (
    <div style={trainerstyle.trainers}>
      <p>Top Trainers</p>
      <h2>Meet Our Experienced Cool Trainers</h2>
      {traineirs.map((tra) => {
        return(
          <div key={tra.id}>
            <div style={trainerstyle.dive} >
            
              <div style={trainerstyle.item}>
                <div>
                  <p>Dorian Yates</p>
                  <p>Yoga Trainer</p>
                  <div style={trainerstyle.divSoc}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaBehance />
                    <FaInstagram />
                  </div>
                </div>
                <div>
                  <img style={trainerstyle.img} src={boyi} alt="" />
                </div>
              </div>
            </div>
            
          </div>  
        )
      })}
      
    </div>
  )
}

export default Trainers