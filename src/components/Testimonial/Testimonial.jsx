import tmnImg from "../Images/text-img.png"
import {FaLongArrowAltRight, FaLongArrowAltLeft} from "react-icons/fa"
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div className="testim-container">
        <div className="test-imgc">
            <img src={tmnImg} alt="" />
        </div>
        <div className="test-deta">
            <h2>What's Client say</h2>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi minima ab non dolore, quidem necessitatibus iusto eos? Pariatur dolor sit architecto! Architecto quia hic nostrum numquam soluta obcaecati quis beatae.
                </p>
            </div>
            <div>
                <button>
                    <FaLongArrowAltLeft />
                </button>
                <button>
                    <FaLongArrowAltRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Testimonial