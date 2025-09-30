import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle = 'Our PROGRAM' title = 'What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle = 'Gallery' title = 'Campus Photos'/>
      <Campus/>
      <Title subTitle = 'Contact Us' title = 'Get in Touch'/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App