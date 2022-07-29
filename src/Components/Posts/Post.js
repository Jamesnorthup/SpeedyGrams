import React from "react";
import "./Post.css";
import Avatar from "react-avatar";
import Card from "react-bootstrap/Card";
import Comment from "../Comments/Comment";
import { BiCommentAdd } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import ReactDom from "react-dom";
import Popup from "react-popup";

import Button from "react-bootstrap/Button";

function Post(props) {
  const { user } = useAuth0();

  const [commentState, setCommentState] = useState();
  const handleComment = (e) => {
    console.log(commentState);
    setCommentState(e.target.value);
  };

  const PostCommentEvent = async () => {
    console.log("1");

    // const postComment = async () => {
    //   console.log("2");

    const res = await fetch("http://localhost:4000/comments/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        creator: user.email,
        comment: commentState,
      }),
    })

    console.log("3");
    const json = res.json();
    console.log("4");
    const newComment = json.newComment;
    function doStuff() {
      const secondRes = fetch(
        `http://localhost:4000/posts/${props.id}/addComment`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            commentId: json.newComment._id,
          }),
        }
      );
    }
    // };
    // postComment();
  };

  return (
    <div className="post">
      <Card style={{ width: "500px" }}>
        <Card.Header style={{ width: "500px", padding: "10px" }}>
          <Avatar
            className="post_avatar"
            githubHandle={props.image}
            name={props.creator}
            size={40}
            round="20px"
          />

          <strong style={{ textSizeAdjust: "auto" }}> {props.creator}</strong>
        </Card.Header>

        <Card.Img style={{ width: "500px" }} variant="top" src={props.image} />
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>{props.caption}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {props.comments.map((com) => (
            <Comment creator={com.creator} comment={com.comment} />
          ))}

          {/* <InputGroup.Text id="basic-addon1" style={{width:"500px",color:"white"}}><BiCommentAdd/></InputGroup.Text> */}
          <Form onSubmit={PostCommentEvent} style={{ padding: 10 }}>
            <Form.Group>
              <Form.Control
                value={commentState}
                type="text"
                placeholder="Comment"
                onChange={handleComment}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "50px", opacity: "70%" }}
            >
              {" "}
              <BiCommentAdd />
            </Button>
          </Form>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Post;
