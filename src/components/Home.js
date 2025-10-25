import React from 'react'
import Services from './Services'
import Contact from './Contact'
import Banner from './Banner'
import Hero from './Hero'
import Banner2 from './Banner2'

const Home = () => {
  return (
    <>
   
    <Hero/>
    <div className='home-section'>
    <Services/>
    </div>
    <Banner/>
    <Banner2/>
    <Contact/>
  </>
  )
}

export default Home
