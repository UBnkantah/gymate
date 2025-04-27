import Header from '../components/Header/Header'
import Upcom from '../components/upcom/Upcom'
import Pchange from '../components/PChange/Pchange'
import Coaches from '../components/Coaches'
import MemShip from '../components/MemShip/MemShip'
import Blogs from '../components/Blogs'
import ScrolF from '../components/ScrolF/ScrolF'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Upcom />
      <Pchange />
      <Coaches />
      <MemShip /> 
      <Blogs />
      <ScrolF />
      <Footer />
    </div>
  )
}

export default Home