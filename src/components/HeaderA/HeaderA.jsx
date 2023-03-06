import HAImg from "../Images/about-img.jpg"
import { HabouttStyle } from "./HeaderA.style"

const HeaderA = () => {
  return (
    <div style={HabouttStyle.haboutt}>
      <div>
          <h2>
            About
          </h2>
        </div>
        <div style={HabouttStyle.habouttImg}>
          <img src={HAImg} style={HabouttStyle.img} alt="" />
        </div>
    </div>
  )
}

export default HeaderA