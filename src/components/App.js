import React from "react";
import "../styles/App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar.js';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
    </div>
    </BrowserRouter>
  );
}

export default App;
