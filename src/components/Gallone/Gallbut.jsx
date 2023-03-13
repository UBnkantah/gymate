import {Link} from 'react-router-dom'

const Gallbut = () => {
  return (
    <div className='but-container'>
        <div className='but-flex'>
            <button>
                <Link to="/gallery">1</Link>
            </button>
            <button>
                <Link to="/gallery/page/2">2</Link>
            </button>
        </div>
    </div>
  )
}

export default Gallbut