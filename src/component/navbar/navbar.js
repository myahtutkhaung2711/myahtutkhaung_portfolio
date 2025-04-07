import './navbar.css'; // Importing the CSS file for styling
import React from 'react'; // Importing React library
// import { useState } from 'react'; // Importing useState hook from React

function Navbar() {
  return (
    <div className='container'>
        <nav className="navbar">
        <h2 className='title'>Mya Htut Khaung </h2>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>    
    </div>
  );
}

export default Navbar;