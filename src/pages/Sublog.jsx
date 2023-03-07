import {useParams} from "react-router-dom"
import {blog} from "../components/Data/Data"
import Footer from "../components/Footer/Footer";
import { HabouttStyle } from "../components/HeaderA/HeaderA.style";
import HPImg from "../components/Images/about-img.jpg"
// import 

const Sublog = () => {
  const {sublog} = useParams();
  const catblg = blog.find((bl) => bl.but === sublog)

  const {but, title, imag} = catblg

  return (
    <>
      <div style={HabouttStyle.haboutt}>
        <div>
          <h2>{but}</h2>
        </div>
        <div style={HabouttStyle.habouttImg}>
          <img src={HPImg} alt="" style={HabouttStyle.img} />
        </div>
      </div>
      <div style={{marginBottom: "100px"}}>
        <h1>{but}</h1>
        <p>{title}</p>
        <img src={imag} alt="" />
      </div>
      <Footer />
    </>
    
  )
}

export default Sublog