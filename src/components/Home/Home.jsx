import React from 'react'
import Navbar from '../Header/Navbar'
import Hero from '../Header/Hero'
import Companie from '../compnies/Companie'
import Courses from '../course/Courses'
import Categories from '../categories/Categories'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Companie/>
    <Courses/>
    <Categories/>
    <Contact/>
    <Footer/>
    
      
    </div>
  )
}

export default Home