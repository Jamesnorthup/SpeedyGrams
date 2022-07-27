
import React, { useState, useEffect } from 'react';
import './App.css';
import Post from '../Components/Posts/Post';
import styled from "styled-components";
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function App() {
// email, image, caption, comments
const commentArray=["this is great", "Cool man"]
  const [posts, setPosts] = useState([
    {
      creator: "James",
      image: "https://patterns.dev/img/reactjs/react-logo@3x.svg/",
      caption: "Hey, Check it out!",
      comments: commentArray
    },
    {
      creator: "Billy Jean",
      image: "https://patterns.dev/img/reactjs/react-logo@3x.svg/",
      caption: "Hey, Check it out!",
      comments: commentArray
    }

  ]);
  const [open, setOpen] = useState(false);


  return (
    <div className="app">


      {/* Header */}
      <div className="app_header">
        <img
          className="app_headerImage"
          src="SpeedygramLogo.png"
          alt="" />

      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>


      <h1>Welcome to your posts page</h1>
      <div className="app_posts">

        {
          posts.map(post => (
        
            <Post creator={post.creator} image={post.image} caption={post.caption} comments={post.comments}/>
          ))
        }

        {/* Posts */}

      </div>
    </div>
  );
}


export default App;
