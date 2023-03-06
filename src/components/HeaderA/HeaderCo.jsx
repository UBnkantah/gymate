import {HabouttStyle} from "./HeaderA.style"
import HCoImg from "../Images/about-img.jpg"

const HeaderCo = () => {
  return (
    <div style={HabouttStyle.haboutt}>
      <div>
          <h2>
            Contact
          </h2>
        </div>
        <div style={HabouttStyle.habouttImg}>
          <img src={HCoImg} style={HabouttStyle.img} alt="" />
        </div>
    </div>

  )
}

export default HeaderCo