import {useParams} from "react-router-dom"
import {blog} from "../components/Data/Data"

const Sublog = () => {
  const {sublog} = useParams();
  const catblg = blog.find((bl) => bl.but === sublog)

  const {but, title} = catblg

  return (
    <div style={{marginBottom: "100px"}}>
        <h1>{but}</h1>
        <p>{title}</p>
    </div>
  )
}

export default Sublog