import React from 'react'
import CloviaHeader from '../components/Navbar'
import Hero from '../components/HeroSection'
import ProductCardsPage from '../components/ProductCard'
import PromoBanner from '../components/PromoBanner'
import OfferBar from '../components/ReturnBanner'
import StylesSection from '../components/Banner'

const Home = () => {
  return  (
    <div><CloviaHeader/>
    <Hero/>
    <div className='mt-5'><OfferBar/></div>
    <div className='mt-5'><PromoBanner/></div>
    <div className='mt-5'><StylesSection/></div>
    
    </div>
  )
}

export default Home