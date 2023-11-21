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

      <MainHeader />
      <Aboutme />

      <h1>About Me</h1>
      <h2>Brandon Myers</h2>
      
      <h3>I am webdesigner and developer whose passion is making striking and unique websites</h3>
      <h1 id="#Projects">My Work</h1>
      <Musik />

      <Foodfinder />


      <Contact />


    </>
  )
}

export default App
