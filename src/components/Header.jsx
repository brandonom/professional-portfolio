import '../styles/header.scss';
import { Link } from 'react-router-dom';
import Githublogo from '../assets/25231.png';
import React from 'react';

function MainHeader(propsObj) {
      return (
        <header className="fixed-top d-flex justify-content-between">
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About Me</a>
          <a href='#'>Contact Me</a>
          <a href='#'>Projects</a>
          <a href="https://github.com/brandonom">
            <img src={Githublogo} className="img-fluid" alt="github logo" />
          </a>
        </nav>
        
        
  
      </header>
    );
  }
  
  export default MainHeader; 