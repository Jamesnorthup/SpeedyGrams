import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const NewPost = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [caption, setCaption] = useState();
  const [image, setImage] = useState();

  const handleCaption = (e) => {
    setCaption(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    // fetch("http://localhost:4000/posts/new", {
      fetch("https://speedygram-js.herokuapp.com/posts/new", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        creator: user.email,
        imageUrl: image,
        caption: caption,
        comments: [],
      }),
    });
  };

  return (
    <Container>
      <div className="newPost">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Caption</Form.Label>
            <Form.Control
              name="caption"
              as="textarea"
              value={caption}
              onChange={handleCaption}
              rows={3}
            />

            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              as="textarea"
              value={image}
              onChange={handleImage}
              rows={4}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default NewPost;
