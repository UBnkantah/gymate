import React from 'react'
import Header from '../components/Header/Header'
import Habout from '../components/Habout/Habout'
import Upcom from '../components/upcom/Upcom'
import Trainers from "../components/Trainers/Trainers"
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Habout />
      <Upcom />
      <Trainers />
      <Footer />
    </div>
  )
}

export default Home