import aimg from "../Images/habott-img.jpg"
import { HabouttStyle } from "./Haboutt.style"

const Haboutt = () => {
  return (
    <div style={HabouttStyle.haboutt} >
        <div style={HabouttStyle.habouttImg}>
            <img src={aimg} style={HabouttStyle.img} alt="" />
        </div>
        <div>
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
            <button>
                CONTACT WITH US
            </button>
        </div>
    </div>
  )
}

export default Haboutt