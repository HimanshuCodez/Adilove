import React from 'react'
import CloviaHeader from '../components/Navbar'
import Hero from '../components/HeroSection'
import ProductCardsPage from '../components/ProductCard'
import PromoBanner from '../components/PromoBanner'
import OfferBar from '../components/ReturnBanner'
import StylesSection from '../components/Banner'
import PinkBanner from '../components/PinkBanner'
import PurpleBanner from '../components/BannerPurple'
import BlackBanner from '../components/BlackBanner'
import Footer from '../components/Footer'


const Home = () => {
  return  (
    <div><CloviaHeader/>
    <Hero/>
    <div className='mt-10'><PinkBanner/></div>
    <div className='mt-5'><PromoBanner/></div>
    <div className='mt-5'><BlackBanner/></div>
    <div className='mt-5'><StylesSection/></div>
    <div className='mt-5'><OfferBar/></div>
    <div className='mt-5'><PurpleBanner/></div>
    <Footer/>
    
    </div>
  )
}

export default Home