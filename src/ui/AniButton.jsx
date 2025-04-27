import { Link } from "react-router-dom";
import "../App.css"
import { FaArrowRight } from "react-icons/fa";

const AniButton = () => {
  return (
      <Link to="/contact">
        <button className="bg-primary px-4 py-2 rounded text-white flex flex-row gap-2 items-center">
          OUR CLASSES
          <FaArrowRight />
        </button>
      </Link>
  );
};

export default AniButton;
