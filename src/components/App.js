import React, { useState } from "react";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    console.log(response.data);
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
      <div id="fb-root"></div>
    </div>
  );
}

export default App;
