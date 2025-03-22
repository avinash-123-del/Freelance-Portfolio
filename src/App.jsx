import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'

axios.defaults.baseURL = "https://freelance-portfolio-backend.onrender.com"

const App = () => {
  return (
    <div>
      <Header />

      <main className="main-page-wrapper">
        <HeroSection />
        <Features />
        <Portfolio />
        <Resume />
        <Testimonial />
        {/* <Clients /> */}
        {/* <Pricing1 />
        <Pricing2 /> */}
        <Contact />
        {/* <Footer /> */}


      </main>

    </div>
  )
}

export default App