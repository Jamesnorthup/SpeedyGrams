import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewPost = () => {
  const [caption, setCaption] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/posts/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        creator: "", //Input auth0 email here
        image: e.target.image.value,
        caption: caption,
        comments: [],
      }),
    });

    setCaption("");
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
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default NewPost;
