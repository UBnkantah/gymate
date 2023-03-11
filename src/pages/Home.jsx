import Header from '../components/Header/Header'
import Habout from '../components/Habout/Habout'
import Upcom from '../components/upcom/Upcom'
import Pchange from '../components/PChange/Pchange'
import Coaches from '../components/Coaches/Coaches'
import Testimonial from '../components/Testimonial/Testimonial'
import MemShip from '../components/MemShip/MemShip'
import ScrolF from '../components/ScrolF/ScrolF'
import Why from '../components/Why/Why'
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
      <ScrolF />
      <Footer />
    </div>
  )
}

export default Home