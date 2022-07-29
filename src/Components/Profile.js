import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Post from "./Posts/Post";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [myPosts, setMyPosts] = useState();

  const makeApiCall = async () => {
    // const res = await fetch("http://localhost:4000/posts/myposts", {

      const res = await fetch("https://speedygram-js.herokuapp.com/posts/myposts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
      }),
    });
    const json = await res.json();
    setMyPosts(json.posts);
  };
  makeApiCall();

  return (
    <Container>
      <h2>My Posts</h2>
      {myPosts &&
        myPosts.map((post) => {
          return (
            <Row>
              <Post
                user={user}
                creator={post.creator}
                image={post.imageUrl}
                caption={post.caption}
                comments={post.comments}
              />
            </Row>
          );
        })}
    </Container>
  );
};

export default Profile;
