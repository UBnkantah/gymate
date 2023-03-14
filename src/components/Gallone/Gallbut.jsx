import {Link} from 'react-router-dom'
import "./Gallone.css"

const Gallbut = () => {
  return (
    <div className='but-container'>
        <div className='but-flex'>
          <button className='but-contai'>
            <Link to="/gallery">1</Link>
          </button>
          <button className='but-contai'>
            <Link to="/gallery/page/2">2</Link>
          </button>
        </div>
    </div>
  )
}

export default Gallbut