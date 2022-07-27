import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Route, Redirect } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Profile from "../Components/Profile";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "James",
      caption: "  Wow it works!",
      imageUrl: "https://patterns.dev/img/reactjs/react-logo@3x.svg/",
    },
    {
      username: "James",
      caption: "  Wow it works!",
      imageUrl: "https://patterns.dev/img/reactjs/react-logo@3x.svg/",
    },
  ]);

  return (
    <div className="app">
      <header>
        {/* Insert navbar componenet here */}
      </header>
      <Container>
        <Route path="/home" render={() => <HomePage />} />
        <Route path="/profile" render={() => <Profile />} />
      </Container>
    </div>
  );
}

export default App;
