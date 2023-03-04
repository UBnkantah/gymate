import aboImg from "../Images/abo-mis.jpg"
import abmImg from "../Images/about-his.jpg"
import { HimiStyle } from "./Himi.style"


const HiMi = () => {
  return (
    <div style={HimiStyle.mainContainer}>
        <div style={HimiStyle.container}>
            <div style={HimiStyle.himgcon}>
                <img src={aboImg} alt="" style={HimiStyle.img} />
            </div>
            <div style={HimiStyle.himgcon}>
                <h2>Our Mission</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eius asperiores assumenda delectus nostrum, enim accusantium impedit nihil eum. Facere!
                </p>
            </div>
        </div>
        <div style={HimiStyle.container}>
            <div style={HimiStyle.himgcon}>
                <h2>Our Mission</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam impedit quae quis quod distinctio omnis obcaecati, debitis qui cum!
                </p>
            </div>
            <div style={HimiStyle.himgcon} >
                <img src={abmImg} alt="" style={HimiStyle.img} />
            </div>
        </div>
    </div>
  )
}

export default HiMi