import {blog} from '../Data/Data'
import { AppStyle } from '../../App.style'
import { Link } from "react-router-dom"
import { blogStyle } from './Blog.style'

const Blog = () => {
  return (
    <div style={blogStyle.topDiv}>
      <div style={blogStyle.topDiv}>
        <h2 style={AppStyle.h2}>Our Latest Blog Posts</h2>
        <p>Gymat an unknown printer took galle type anscraey aretea bled make a type specimen book ayuvived not onlyive centuries</p>
      </div>
      <div style={blogStyle.div}>
        {blog.map((bl) => {
            return (
            <div key={bl.id} style={blogStyle.mainDiv}>
              <button>
                <Link to={`/categories/${bl.but}`}>{bl.but}</Link>
              </button>
              <h4>
                {bl.title}
              </h4>
              <p>Admin | March 22, 2022</p>
            </div>
            )
          })}
      </div>    
    </div>
  )
}

export default Blog