import Footer from "../components/Footer"
import HiMi from "../components/HiMi/HiMi"
import { AniButton, Headers } from "../ui"
import aimg from "../components/Images/habott-img.jpg"

const About = () => {
  return (
    <div>
      <Headers title="About" />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 mx-0 md:mx-12 py-12">
        <div >
            <img src={aimg} className="rounded-lg" alt="" />
        </div> 

         <div className="flex flex-col gap-2">
            <p>WHO WE ARE</p>
            <h2>We Will Give You Strength and Health</h2>
            <p>
                Gymatan unknown printer took ile type anscraey retea bled maketype 
                Specimen bookayurvived ot onlyive centuries. Gymatan unknown printer took ile type anscraey. 
            </p>
            <ul>
                <li>
                    Gymat an unknown printer
                </li>
                <li>
                    Scraey aretea bled makea type
                </li>
                <li>
                    Book has survived not onlyive
                </li>
                <li>
                    Centuries but also the leap electronic
                </li>
            </ul>
            <AniButton />
        </div>  
        </div> 
    </div>
      <HiMi />
      <Footer />
    </div>
  )
}

export default About