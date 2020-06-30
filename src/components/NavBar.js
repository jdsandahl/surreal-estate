import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import '../styles/NavBar.css';
import Logo from "../images/real-estate-logo.png";

const NavBar = () => {

    return(
        <div className="navbar">
            <img className="logo" src={Logo} alt="logo" />
            <h2>Surreal Estate</h2>
            <ul className="navbar-links">
                <li className="navbar-links-item">View Property</li>
                <li className="navbar-links-item">Add Property</li>
            </ul>
        </div>
    );
}

export default NavBar;