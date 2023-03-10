import Header from '../components/Header/Header'
import Habout from '../components/Habout/Habout'
import Upcom from '../components/upcom/Upcom'
import Pchange from '../components/PChange/Pchange'
import Blog from '../components/Blog/Blog'
import Trainers from "../components/Trainers/Trainers"
import Coaches from '../components/Coaches/Coaches'
import Testimonial from '../components/Testimonial/Testimonial'
import MemShip from '../components/MemShip/MemShip'
import Why from '../components/Why/Why'
import Shop from '../components/Shop/Shop'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Habout />
      <Upcom />
      <Why />
      <Pchange />
      <Coaches />
      <Testimonial />
      <MemShip /> 
      <Blog />
      <Shop />
      <Trainers />
      <Footer />
    </div>
  )
}

export default Home