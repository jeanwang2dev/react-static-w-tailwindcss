import React from 'react';
import reactLogo from '../assets/logo192.png';

function Nav(props) {
    return (      
        <nav className={props.darkMode ? "dark": ""}>
            <div className="flex justify-start">
                <img src={reactLogo} className="w-7 h-7 mr-1.5" alt="react logo" />
                <h3 className="text-primaryBlue logo_font">ReactFacts</h3>
            </div>
            <div className="flex items-center space-x-2">
                <p className="toggler-light">Light</p>
                <div 
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>                
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>        
    )
}

export default Nav;