import React from 'react';
import '../styles/aboutme.scss';
import heroBackground from '../assets/portfoliohero.jpg';
import MainHeader from './Header';

function Aboutme () {
    const divStyle = {
        backgroundImage: `url(${heroBackground})`, // Ensure the image path is used as a URL
    };
    return (
        <>

        <div className="hero" style={divStyle}>
        <MainHeader/>

        
       
    </div>
    </>
);
}
export default Aboutme;