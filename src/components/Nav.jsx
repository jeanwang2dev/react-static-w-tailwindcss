import React from 'react';
import reactLogo from '../assets/logo192.png';

function Nav() {
    return (      
        <nav className="flex justify-between items-center py-8 pl-6 bg-darkGray">
            <div className="flex justify-start">
                <img src={reactLogo} className="w-7 h-7 mr-1.5" alt="react logo" />
                <h3 className="text-primaryBlue logo_font">ReactFacts</h3>
            </div>
            <h4 className="nav_font text-white mr-7">React course - Project 1</h4>
        </nav>        
    )
}

export default Nav;