import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
      <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
    </div>
  );
};

export default SideBar;
