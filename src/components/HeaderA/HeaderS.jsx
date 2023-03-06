import {HabouttStyle} from "./HeaderA.style"
import HSImg from "../Images/about-img.jpg"

const HeaderS = () => {
  return (
    <div>
        <div style={HabouttStyle.haboutt}>
      <div>
          <h2>
            Galleries
          </h2>
        </div>
        <div style={HabouttStyle.habouttImg}>
          <img src={HSImg} style={HabouttStyle.img} alt="" />
        </div>
    </div>
    </div>
  )
}

export default HeaderS