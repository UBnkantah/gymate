import "../App.css"
import { Link } from "react-router-dom"
import { blogg } from "./Data/Data"

const Blogs = () => {
  return (
    <div className="blog-container">
        {blogg.map((blog) => {
            return (
                <div className="blog-flex" key={blog.id}>
                    <button className="time-bl">
                        21.03.22
                    </button>
                    <h2>
                        {blog.top}
                    </h2>
                    <p>
                        Authoritatively disseminate multimedia based total linkage 
                        through market-driven methodolContinually transform
                    </p>
                    <button className='class-bu'>
                        <Link to="/">
                            READ MORE
                        </Link>
                        
                    </button>
                </div>
            )
        })}
        
    </div>
  )
}

export default Blogs