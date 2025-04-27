import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"


const BlogCard = ({top}) => {
  return (
<div className="flex flex-col gap-4 justify-between items-start shadow rounded-lg px-4 py-12 h-[370px]">
                    <div className="border border-primary px-4 py-2 rounded-lg">
                        21.03.22
                    </div>
                    <h5 className="font-[700] text-2xl">
                       {top}
                    </h5>
                    <p>
                        Authoritatively disseminate multimedia based total linkage 
                        through market-driven methodolContinually transform
                    </p>
                    <Link to="/">
                    <button className='px-4 py-2 flex flex-row gap-2 font-[600] bg-primary text-white items-center transition-all ease-in-out duration-[1s] rounded border border-primary hover:bg-white hover:text-primary'>
                        READ MORE    
                        <FaLongArrowAltRight />                    
                    </button>
                    </Link>
                    
                </div>
  )
}

export default BlogCard