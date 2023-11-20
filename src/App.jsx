import { useState } from 'react'
import './styles/app.scss';
import Foodfinder from './components/Foodfinder'
import MainHeader from './components/Header'
import Musik from './components/Musik'
import Contact from './components/Contact'
import Aboutme from './components/Aboutme'


function App() {
 

  return (
    <>
    

      <Aboutme/>

      <h1>My Projects</h1>
      <Musik/>
      
      <Foodfinder/>
      

      <Contact/>
       
      
    </>
  )
}

export default App
