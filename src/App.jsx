import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import About from './Components/About'
import Courses from './Components/Courses'
import Mentor from './Components/Mentor'
import Testimonial from './Components/Testimonial'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Hero/>
      <Cards/>
      <About/>
      <Courses/>
      <Mentor/>
      <Testimonial/>
    </div>
  )
}

export default App