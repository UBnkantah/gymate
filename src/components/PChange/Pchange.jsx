import { Link } from "react-router-dom"
import { routine } from "../Data/Data"
import VideoImg from "../Images/video.png"
import "./Pchange.css"
import { FaLongArrowAltRight } from "react-icons/fa"

const Pchange = () => {
  return (
    <>
    <div className="container">
    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 md:gap-8 py-8'>
            {routine.map((rou) => (
                <div className='w-full flex flex-col gap-1 justify-center items-center text-center' key={rou.id}>
                  {/* <img src= alt="" className='w-20 h-20' /> */}
                    {rou.ics}
                    <h2>{rou.name}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor deserunt nulla, alias beatae voluptatibus.</p>
            </div>
                )
            )}
            
            
        </div></div>
        <div className="bg-pchaimg bg-cover bg-center py-8 bg-fixed text-white">
          <div className="container">
<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center items-center mx-0 md:mx-12'>
      <div className="flex flex-col gap-4 items=center">
        <h5 className="text-2xl md:text-5xl font-[700]">Gyms Don't Change Lives. People Do.</h5>
        <p>
          Gymhen an unknown printer took a gallery of type grambled it to make a type 
          specimen book. it has survived not only five centuries.
        </p>
        <Link to="/">
                            <button className='px-4 py-2 flex flex-row gap-2 font-[600] bg-primary text-white items-center transition-all ease-in-out duration-[1s] rounded border border-primary hover:bg-white hover:text-primary'>
                                READ MORE    
                                <FaLongArrowAltRight />                    
                            </button>
                            </Link>
      </div>
      <div className="video-cont">
        <img src={VideoImg} alt="" />
      </div>
    </div>
          </div>
        </div>
    
    </>
    
  )
}

export default Pchange