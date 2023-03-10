import {FaFacebookF, FaTwitter, FaInstagram, FaPinterest} from "react-icons/fa"
import "./ConDetail.css"

const ConDetail = () => {
  return (
    <div className="cond-container">
        <div className="con-add">
            <h2>
                We Are Here For Help you! To Shape Your Body
            </h2>
            <p>
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic types etting.type specimen It has survived not only five centuries, but also the type specimen book.
            </p>
        </div>
        <div className="con-add">
            <div className="nyc-add add">
                <h3>New York City, USA</h3>
                <hr />
                <p>85 Briston Mint Street</p>
                <p>London, E1 8LG, USA</p>
            </div>
            <div className="ohrs-add add">
                <h3>Opening Hours</h3>
                <hr />
                <p>Mon to Fri 7:30am - 1:00am</p>
                <p>Mon to Fri 7:30am - 1:00am</p>
            </div>
        </div>
        <div className="con-add">
            <div className="add">
                <h3>Information</h3>
                <hr />
                <p>+800-123-4567</p>
                <p>gymat@yourname.com</p>
            </div>
            <div className="add">
                <h3>Follow Us On</h3>
                <hr />
                <div className="soc-ico">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram/>
                    <FaPinterest />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ConDetail