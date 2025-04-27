import aboImg from "../Images/abo-mis.jpg"
import abmImg from "../Images/about-his.jpg";

const HiMi = () => {
  return (
    <div className="container">
        <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-12">
            <div className="w-full h-[450px] ">
                <img src={aboImg} alt="" className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"/>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center mx-4">
                <h2>Our Mission</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eius asperiores assumenda delectus nostrum, enim accusantium impedit nihil eum. Facere!
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-12">
            <div className="flex flex-col gap-2 justify-center items-center mx-4">
                <h2>Our Mission</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eius asperiores assumenda delectus nostrum, enim accusantium impedit nihil eum. Facere!
                </p>
            </div>
            <div className="w-full h-[450px] ">
                <img src={abmImg} alt="" className="w-full h-full object-cover rounded-bl-lg rounded-br-lg"/>
            </div>
            
        </div>    
        </div>
    </div>
  )
}

export default HiMi