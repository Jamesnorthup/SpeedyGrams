import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("http://localhost:4000/posts");
      const json = await res.json();
      console.log("This is getposts");
      setAllPosts(json.posts);
    };
    getPosts();
  }, []);

  const userExists = async () => {
    try {
      const res = await fetch("http://localhost:4000/users/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          username: user.nickname,
          favorites: [],
        }),
      });
    } catch (error) {

    }
  };
  const handleClick = () => {
    navigate("/new");
  };

  if (isAuthenticated) {
    userExists();
  }

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


            </ListGroup>
          </Col>
        )}
        <Col md={8} lg={8} xl={8}>
          <Row>
            {allPosts &&
              allPosts.map((post) => {
                return (
                    <Col>
                      <Post
                        id={post.id}
                        user={user}
                        creator={post.creator}
                        image={post.imageUrl}
                        caption={post.caption}
                        comments={post.comments}
                      />
                    </Col>
                );
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
