import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Profile from "../Components/Profile";
import Navigation from "../Components/Navigation";
import NewPost from "../Components/NewPost";
import OnePost from "../Components/OnePost";
import Post from "../Components/Posts/Post";

function App() {
  // const commentArray = [
  //   { creator: "Bill", comment: "Cool story Bra" },
  //   {
  //     creator: "Jill",
  //     comment:
  //       "Nice, This is awesome. This is a longer comment so I can test if it goes outside the box",
  //   },
  // ];
  // const [posts, setPosts] = useState([
  //   {
  //     creator: "James",
  //     image: "https://patterns.dev/img/reactjs/react-logo@3x.svg/",
  //     caption: "That is awesome",
  //     comments: commentArray,
  //   },
  //   {
  //     creator: "Billy Jean",
  //     image: "https://patterns.dev/img/reactjs/react-logo@3x.svg/",
  //     caption: "Hey, Check it out!",
  //     comments: commentArray,
  //   },
  // ]);

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
