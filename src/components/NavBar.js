import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Logo from "../images/real-estate-logo.png";
import FacebookLogin from "react-facebook-login";

const NavBar = ({ onLogin }) => {

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/" className="navbar-link">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property" className="navbar-link">
            Add Property
          </Link>
        </li>
      </ul>
      <FacebookLogin
        appId="206769633967359"
        autoLoad={true}
        callback={onLogin}
      />
    </div>
  );
};

export default NavBar;
