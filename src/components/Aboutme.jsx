import React from 'react';
import '../styles/aboutme.scss';
import heroBackground from '../assets/portfoliohero.jpg';
import MainHeader from './Header';

function Aboutme () {
    const divStyle = {
        backgroundImage: `url(${heroBackground})`, 
    };
    return (
        <>
        
        <div id="#Aboutme" className="hero" style={divStyle}>
        <MainHeader/>

        
       
    </div>
    </>
);
}
export default Aboutme;