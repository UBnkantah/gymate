import Header from '../components/Header/Header'
import Habout from '../components/Habout/Habout'
import Upcom from '../components/upcom/Upcom'
import Blog from '../components/Blog/Blog'
import Trainers from "../components/Trainers/Trainers"
import Why from '../components/Why/Why'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Habout />
      <Upcom />
      <Why />
      <Blog />
      <Trainers />
      <Footer />
    </div>
  )
}

export default Home