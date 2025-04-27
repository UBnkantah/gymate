import HAImg from "../components/Images/about-img.jpg"

const Headers = ({title}) => {
  return (
    <div className="bg-black text-white">
        <div className="container">
      <div className=' grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
      <div>
          <h2>
            {title}
          </h2>
        </div>
        <div >
          <img src={HAImg} alt="" />
        </div>
    </div>      
        </div>
    </div>
    
  )
}

export default Headers