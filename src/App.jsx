import { useState } from 'react'
import './styles/app.scss';
import Foodfinder from './components/Foodfinder'
import MainHeader from './components/Header'
import Musik from './components/Musik'
import Contact from './components/Contact'
import Aboutme from './components/Aboutme'
import UrbanVogue from './components/UrbanVogue'
// import React from '../assets/React-icons.svg.png'


function App() {


  return (
    <>

      <MainHeader />
      <Aboutme />

      <h1>About Me</h1>
      <h2>Brandon Myers</h2>
      
      <h3>I am webdesigner and developer whose passion is making striking and unique websites</h3>
      <div>
        <h1>My Skills</h1>
      <img src=""></img>
      </div>
      <h1 id="#Projects">My Work</h1>
      <Musik />

      <Foodfinder />

      <UrbanVogue/>

      <Contact />


    </>
  )
}

export default App
