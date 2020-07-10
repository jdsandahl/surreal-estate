import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <label>Filter By City:  
      <ul className="sidebar__links">
        <li className="sidebar__item">
          <Link to={`/?query={"city": "Manchester"}`} className="sidebar__link">Manchester</Link>
        </li>
        <li className="sidebar__item">
          <Link to={`/?query={"city": "Leeds"}`} className="sidebar__link">Leeds</Link>
        </li>
        <li className="sidebar__item">
          <Link to={`/?query={"city": "Sheffield"}`} className="sidebar__link">Sheffield</Link>
        </li>
        <li className="sidebar__item">
          <Link to={`/?query={"city": "Liverpool"}`} className="sidebar__link">Liverpool</Link>
        </li>
      </ul>
      </label>
    </div>
  );
};

export default SideBar;
