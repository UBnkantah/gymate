import {HabouttStyle} from "./HeaderA.style"
import HCImg from "../Images/about-img.jpg" 

const HeaderC = () => {
  return (
    <div>
    <div style={HabouttStyle.haboutt}>
      <div>
          <h2>
            Classes
          </h2>
        </div>
        <div style={HabouttStyle.habouttImg}>
          <img src={HCImg} style={HabouttStyle.img} alt="" />
        </div>
    </div>
    </div>
  )
}

export default HeaderC