import { blogg } from "./Data/Data"
import { BlogCard } from "../ui"

const Blogs = () => {
  return (
    <>
    <div className="container">
     <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 md:gap-8 mx-0 md:mx-12 py-12">
        {blogg.map((blog) =>  (
                <BlogCard key={blog.id} top={blog.top}/>
            )
        )}
        
    </div>   
    </div>
    </>
    
    
  )
}

export default Blogs