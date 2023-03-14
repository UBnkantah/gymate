import Primg from "../Images/cla-ft.png"
import { pricingData } from "../Data/Data"
import "./PriceCom.css"

const PriceCom = () => {
  return (
    <>
    <div className="main-price-cont">
        <div className="header-pricing">
            <h3>PRICING CHART</h3>
            <h2>Exclusive Pricing Plan</h2>
            <p>Gymat an unknown printer took a gallery of type and scrambled make a type specimen book.</p>
        </div>
        <div className="unit-container">
            {pricingData.map((pay) => {
                return(
                    <div className="pri-unit" key={pay.id}>
                        <div className="pri-img">
                            <img src={pay.img} alt="" />
                            <div className="top-content">
                                <h3>{pay.stage}</h3>
                            </div>
                        </div>
                        <div className="pri-content">
                            
                            
                            <p>$ <span>{pay.unit}</span> p/m</p>
                            <ul>
                                <li>Free Hand</li>
                                <li>Gym Fitness</li>
                                <li>Weight Loss</li>
                                <li>Personal Trainer</li>
                                <li>Cycling</li>
                            </ul>
                            <button className='class-butt'>
                                PURCHASE NOW
                            </button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    </div>
    <div className="pric-bottom">
            <h2>FITNESS CLASSES THIS SUMMER</h2>
            <p>Get 35% Discount</p>
            <button>
                CONTACT WITH US
            </button>
        </div>
    </>
    
  )
}

export default PriceCom