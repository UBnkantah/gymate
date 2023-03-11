import ScrFit from "../Images/sco-fit.png"
import ScrTop from "../Images/sco-top.png"
import ScrRun from "../Images/scorun.png"
import ScrGym from "../Images/sco-gym.png"
import "./ScrolF.css"

const ScrolF = () => {
  return (
    <div className="scrol-container">
            <div className="scrol-flex animate">
                <div className="img-cont">
                    <img src={ScrFit} alt="" />
                    <img src={ScrTop} alt="" />
                    <img src={ScrRun} alt="" />
                    <img src={ScrGym} alt="" />
                </div>
                <div className="img-cont">
                    <img src={ScrFit} alt="" />
                    <img src={ScrTop} alt="" />
                    <img src={ScrRun} alt="" />
                    <img src={ScrGym} alt="" />
                </div>
            </div>

    </div>
  )
}

export default ScrolF