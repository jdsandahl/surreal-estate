import React from "react";
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import Logo from "../images/real-estate-logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links">
        <Link to="/" className="navbar-links-item">View Properties</Link>
        <Link to="add-property" className="navbar-links-item">Add Property</Link>
      </ul>
    </div>
  );
};

export default NavBar;
