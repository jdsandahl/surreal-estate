import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/NavBar.css";
import Logo from "../images/real-estate-logo.png";
import FacebookLogin from "react-facebook-login";
import ErrorBoundary from "./ErrorBoundary";

const NavBar = ({ userId, onLogin, onLogout }) => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/" className="navbar-link">
            View Properties
          </Link>
        </li>
        {userId && (
          <li className="navbar-links-item">
            <Link to="saved-properties" className="navbar-link">
              Saved Properties
            </Link>
          </li>
        )}
        <li className="navbar-links-item">
          <Link to="add-property" className="navbar-link">
            Add Property
          </Link>
        </li>

        <li className="navbar-links-item">
          {!userId ? (
            <ErrorBoundary>
              <FacebookLogin
                appId="206769633967359"
                autoLoad={false}
                callback={onLogin}
                cssClass="navbar__login"
                icon="fa-facebook"
              />
            </ErrorBoundary>
          ) : (
            <button className="navbar__login" onClick={onLogout}>
              Sign Out
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  userId: PropTypes.string,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default NavBar;
