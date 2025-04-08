import './header.css';
import React from 'react';
import { ReactTyped } from 'react-typed';

function Header() {
    return (
        <header className="header">
            <h1 className='title'>Welcome !</h1>
            <h3 className='subtitle'> I'm {"  "}
                <ReactTyped
                    strings = {
                        ['Mya Htut Khaung.', 'a Web Developer.', 'a UI/UX Designer.', 'a Freelancer.']
                    }
                    typeSpeed={150}
                    loop
                    backSpeed={50}
                    cursorChar="|"
                    showCursor={true}
                />
            </h3>
            <p className='description'>I am a passionate web developer with a keen interest in creating dynamic and user-friendly web applications.</p>
            <p className='description'>I have experience in HTML, CSS, JavaScript, and various web development frameworks.</p>
        </header>
    );
}
export default Header;