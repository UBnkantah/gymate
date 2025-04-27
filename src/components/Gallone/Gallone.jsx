import Gallbut from "./Gallbut"
import {gallOne} from "../Data/Data"
import "../../App.css"

const Gallone = () => {
  return (
    <>
    <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 md:gap-8 py-12'>
            {gallOne.map((gall) => (
                    <div className='w-full h-[350px] rounded-lg relative cursor-pointer' key={gall.id}>
                        <img src={gall.img} alt="" className="absolute w-full h-full rounded-lg"/>
                        <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg block gap-4 transition-all ease-in-out duration-[1s] bg-primary bg-opacity-10">
                            <h2>{gall.name}</h2>
                            <p>{gall.txt}</p>
                        </div>
                    </div>
                )
            )} 
        </div>  
    </div>
        
        <Gallbut />
    </>
    
  )
}

export default Gallone