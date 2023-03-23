import aboImg from "../Images/abo-mis.jpg"
import abmImg from "../Images/about-his.jpg"
import "./Himi.css"


const HiMi = () => {
  return (
    <div className="mainContainer ">
        <div className="himi-container">
            <div className="himgcon">
                <img src={aboImg} alt="" className="abimg"/>
            </div>
            <div className="himgcon">
                <h2>Our Mission</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eius asperiores assumenda delectus nostrum, enim accusantium impedit nihil eum. Facere!
                </p>
            </div>
        </div>
        <div className="secontainer ">
            <div className="himgcon">
                <h2>Our Mission</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam impedit quae quis quod distinctio omnis obcaecati, debitis qui cum!
                </p>
            </div>
            <div className="himgcon" >
                <img src={abmImg} alt="" className="abimg" />
            </div>
        </div>
    </div>
  )
}

export default HiMi