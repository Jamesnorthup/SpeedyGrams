
import React, { useState, useEffect } from 'react';
import './App.css';
import Post from '../Components/Posts/Post';


function App() {

  const [posts, setPosts] = useState([
  {
    username: "James",
    caption: "  Wow it works!",
    imageUrl: "https://patterns.dev/img/reactjs/react-logo@3x.svg/"
  },
  {
    username: "James",
    caption: "  Wow it works!",
    imageUrl: "https://patterns.dev/img/reactjs/react-logo@3x.svg/"
  }

]);


  return (
    <div className="app">


      {/* Header */}
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="" />


      </div>


      <h1>Hello World</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

      {/* Posts */}
    </div>
  );
}


export default App;
