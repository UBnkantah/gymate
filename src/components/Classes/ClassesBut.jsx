import { Link } from "react-router-dom"

const ClassesBut = () => {
  return (
    <div className="but-container">
        <div className="but-flex">
            <button>
                <Link to="/class">1</Link>
            </button>
            <button>
                <Link to="/class/page/2">2</Link>
            </button>
        </div>
    </div>
  )
}

export default ClassesBut