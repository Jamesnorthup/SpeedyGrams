import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Post from "./Posts/Post";

const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [inputShow, setInputShow] = useState(false);

  const makeApiCall = async () => {
    const res = await fetch("http://localhost:3000/posts");
    const json = await res.json();
    setAllPosts(json.posts);
  };

  const handleClick = (e) => {
    e.preventDefault()
    setInputShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/posts/new", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            creator: "",//Input auth0 email here
            image: e.target.image.value,
            caption: e.target.caption.value,
            comments: []
        })
    })

    setInputShow(false);
  }

  useEffect(() => {
    makeApiCall();
  }, [])

  return (
    <Container>
      <Row>
        {allPosts &&
          allPosts.map((post) => {
            return (
              <Col>
                <Post
                  creator={post.creator}
                  image={post.image}
                  caption={post.caption}
                  comments={post.comments}
                />
              </Col>
            );
          })}
      </Row>
      <Button onClick={handleClick}>New Post</Button>
      {inputShow && (
        <div className="newPost">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Input image here</Form.Label>
              <Form.Control name="image" type="file" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Caption</Form.Label>
              <Form.Control name="caption" as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit">
            Submit
            </Button>
        </div>
      )}
    </Container>
  );
};

export default HomePage;
