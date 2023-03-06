import {HabouttStyle} from "./HeaderA.style"
import HPrImg from "../Images/about-img.jpg"

const HeaderPr = () => {
  return (
    <div style={HabouttStyle.haboutt}>
      <div>
          <h2>
            Pricing
          </h2>
        </div>
        <div style={HabouttStyle.habouttImg}>
          <img src={HPrImg} style={HabouttStyle.img} alt="" />
        </div>
    </div>
  )
}

export default HeaderPr