import {useParams} from "react-router-dom"
import {blog} from "../components/Data/Data"
import Footer from "../components/Footer";
import HPImg from "../components/Images/about-img.jpg"
// import 

const Sublog = () => {
  const {sublog} = useParams();
  const catblg = blog.find((bl) => bl.but === sublog)

  const {but, title, imag} = catblg

  return (
    <>
      <div >
        <div>
          <h2>{but}</h2>
        </div>
        <div >
          <img src={HPImg} alt="" />
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