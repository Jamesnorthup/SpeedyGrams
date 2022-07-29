import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Post from "./Posts/Post";

const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  let navigate = useNavigate();

  const getPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      const json = await res.json();
      if (json.posts) {
        setAllPosts(json.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const userExists = async () => {
    try {
      const res = await fetch("http://localhost:4000/user/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          username: user.username,
          avatar: user.picture,
          authId: user.user_id,
          favorites: [],
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = () => {
    navigate("/new");
  };

  if (isAuthenticated) {
    userExists();
  }
  getPosts();

  return (
    <Container>
      <Row>
        {isAuthenticated && (
          <Col>
            <h1>{user.username}</h1>
            <Button onClick={handleClick}>New Post</Button>
            <ListGroup>
              <ListGroup.Item>
                <Link to="/">Profile</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/">My Posts</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/">My favorites</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        )}
        <Col md={8} lg={8} xl={8}>
          <Row>
            {allPosts &&
              allPosts.map((post) => {
                return (
<<<<<<< Updated upstream
                  <div post_Container style={{padding:"300px"}}>
                  <Col >
                    <Post
                      user={user}
                      creator={post.creator}
                      image={post.image}
                      caption={post.caption}
                      comments={post.comments}
                    />
                  </Col>
                  </div>
=======
                    <Col>
                      <Post
                      
                        user={user}
                    
                        creator={post.creator}
                        image={post.imageUrl}
                        caption={post.caption}
                        comments={post.comments}
                      />
                    </Col>
>>>>>>> Stashed changes
                );
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
