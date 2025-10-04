import React from 'react'
import CloviaHeader from '../components/Navbar'
import Hero from '../components/HeroSection'
import ProductCardsPage from '../components/ProductCard'

const Home = () => {
  return  (
    <div><CloviaHeader/>
    <Hero/>
    <ProductCardsPage/></div>
  )
}

export default Home