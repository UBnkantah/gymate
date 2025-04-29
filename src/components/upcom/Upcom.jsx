// eslint-disable no-use-before-define
import "./Upcom.css"
import  {OFC} from "../Data/Data"
import {FaBars} from "react-icons/fa"
import habimg from "../Images/about-imgg.png"

const Upcom = () => {
  return (
    <>
    <div className='container'>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 py-12 mx-0 md:mx-12">
         <div className='relative'>
            <img
            src={habimg} className="rounded-tl-lg rounded-tr-lg" alt="" />
            <div className='absolute w-80 shadow p-4 bg-white bottom-0 rounded-tl-lg rounded-tr-lg'>
                <p>We can help you to overcome the fears and obstacles in your life</p>
            </div>
        </div>
        <div className='flex flex-col gap-2 justify-start'>
            <p>LET'S INTRODUCE</p>
            <h2>
                Take You Health And Fitness To New Level of Heights
            </h2>
            <p className='lor-con'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit iusto! Facilis consequuntur commodi expedita amet sit, quam rem nobis alias repudiandae aliquid, accusamus minus vel sunt et fugit.
            </p>
            <p
                
            >
               Gymat an unknown printer took a galley of type and scr arsry mbled it to make a type specimen book. It has survived notte only five centuries, but also the leap into electronic types eatting rey emaing essentailly unchanged. It was popularised in the 1960s with the release of Letraset.
            </p>
            <div>
                <p
                    
                className='name'>Johon Suanto</p>
                <p
                    
                >
                    Mr. Johon Smith
                    <span>
                        - Founder
                    </span>
                </p>
            </div>
        </div>   
        </div>
        
        
    </div>
    <div className='upcom'>
        <div className="container">
        <div className="mx-auto w-full md:w-[500px] py-4 text-center">
            <h2>Our Featured Classes</h2>
            <p>
                Gymat an unknown printer took galie type anscraey aretea bled make a type specimen bookay survived not onlyive centuries 
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 md:gap-8 mx-0 md:mx-12'>
            {OFC.map((body) => (
                <div className='w-full h-[400px] relative rounded-lg shadow bg-white' key={body.id}>
                    <div className='title-cla'>
                        <h2>{body.head}</h2>
                        <p>The Best Body fitness in Town</p>
                        <div className="p-2 bg-primary w-fit rounded-full mx-auto">
                            <FaBars />
                            {/* {body.icon} */}
                        </div>
                    </div>
                    <div className='w-full h-56'>
                        <img src={body.img} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='cla-time absolute rounded-full'>
                        <p>{body.date}</p>
                    </div>
                </div>
                )
            )}
            
        </div>    
        </div>
        
    </div>
    </>
    
  )
}

export default Upcom