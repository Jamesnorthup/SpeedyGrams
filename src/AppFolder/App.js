import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Profile from "../Components/Profile";
import Navigation from "../Components/Navigation";
import NewPost from "../Components/NewPost";
import OnePost from "../Components/OnePost";

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
        <Navigation />
      </header>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path=":id" element={<OnePost />} />
          </Route>
          <Route path="/new" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
