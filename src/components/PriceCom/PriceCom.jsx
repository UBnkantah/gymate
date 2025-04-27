import { pricingData } from "../Data/Data"
import "./PriceCom.css"
import { AniButton } from "../../ui"

const PriceCom = () => {
  return (
    <>
    <div className="container">
        <div className="w-full md:w-1/2 mx-auto py-4 md:py-8 text-center">
            <h3>PRICING CHART</h3>
            <h2>Exclusive Pricing Plan</h2>
            <p>Gymat an unknown printer took a gallery of type and scrambled make a type specimen book.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 md:gap-8 mx-0 md:mx-12 py-24">
            {pricingData.map((pay) => (
                    <div className="flex flex-col gap-4 justify-center items-center shadow rounded-lg" key={pay.id}>
                        <div className="relative w-full h-40 rounded-tl-lg rounded-tr-lg">
                            <img src={pay.img} alt="" className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"/>
                            <div className="absolute w-3/4 rounded-tl-lg bg-white hover:bg-primary text-center mx-auto bottom-0 left-0 right-0 transition-all ease-in-out duration-[1s] rounded-tr-lg py-4">
                                <h3>{pay.stage}</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center pb-12">
                            
                            
                            <p>$ <span>{pay.unit}</span> p/m</p>

                                <p>Free Hand</p>
                                <p>Gym Fitness</p>
                                <p>Weight Loss</p>
                                <p>Personal Trainer</p>
                                <p>Cycling</p>
                     
                            <AniButton />
                        </div>
                    </div>
                )
            )}
            
        </div>
    </div>
    <div className="bg-pricimg fixed bg-cover bg-center">
        <div className="container">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-auto my-auto">
            <h2>FITNESS CLASSES THIS SUMMER</h2>
            <p>Get 35% Discount</p>
            <AniButton />
            </div>
        </div>
            
        </div>
    </>
    
  )
}

export default PriceCom