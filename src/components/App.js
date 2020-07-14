import React, { useState } from "react";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";

function App() {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    const loginDetails = response.id;
    setUserId(loginDetails);
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserId(""));
  };
  console.log(userId);
  return (
    <div className="App">
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userId={userId} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userId={userId} />}
        />
        <Route
          exact
          path="/saved-properties"
          render={(props) => <SavedProperties {...props} userId={userId} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
      <div id="fb-root"></div>
    </div>
  );
}

export default App;
