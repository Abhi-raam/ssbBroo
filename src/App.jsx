import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import About from './Components/About'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Hero/>
      <Cards/>
      <About/>
    </div>
  )
}

export default App