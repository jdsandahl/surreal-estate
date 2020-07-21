import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <aside className="home-page__welcome">
        <h2 className="home-page__heading">Welcome</h2>
        <p>
          From our app you're able to view, search and post properties within
          the UK.
        </p>
        <p>
          Save your favourite properties to view later by logging in with
          Facebook
        </p>
      </aside>
    </div>
  );
};

export default HomePage;
