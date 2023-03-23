import aimg from "../Images/habott-img.jpg"
import "./Haboutt.css"

const Haboutt = () => {
  return (
    <div className="haboutt container">
        <div className="habouttImg">
            <img src={aimg} className="habb" alt="" />
        </div>
        <div className="item">
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