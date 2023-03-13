import VideoImg from "../Images/video.png"
import "./Pchange.css"

const Pchange = () => {
  return (
    <div className='pchange'>
      <div className="pchange-header">
        <h2>Gyms Don't Change Lives. People Do.</h2>
        <p>
          Gymhen an unknown printer took a gallery of type grambled it to make a type 
          specimen book. it has survived not only five centuries.
        </p>
        <button>
          READ MORE
        </button>
      </div>
      <div className="video-cont">
        <img src={VideoImg} alt="" />
      </div>
    </div>
  )
}

export default Pchange