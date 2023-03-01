import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const SharedLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default SharedLayout