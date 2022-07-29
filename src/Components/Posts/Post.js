import React from 'react'
import './Post.css'
import Avatar from 'react-avatar';
import Card from 'react-bootstrap/Card';
import Comment from '../Comments/Comment';
<<<<<<< Updated upstream


function Post(props) {

    return (
=======
import { BiCommentAdd} from "react-icons/bi";


function Post(props) {
    console.log(props.id)
    return (

   
>>>>>>> Stashed changes
  
            <div className="post">
                <Card style={{ width: '500px' }}>
                    <Card.Header style={{ width: '500px', padding: '10px' }}>
                        <Avatar className="post_avatar" githubHandle={props.image} name={props.creator} size={40} round="20px" />

<<<<<<< Updated upstream
                       {props.creator}

                    </Card.Header>


=======
                        <strong style={{ textSizeAdjust: "auto" }}> {props.creator}</strong>

                    </Card.Header>

>>>>>>> Stashed changes
                    <Card.Img style={{ width: '500px' }} variant="top" src={props.image} />
                    <Card.Body>

                        <Card.Text style={{ textAlign: "center" }}>
                            {props.caption}
                        </Card.Text>
                        <Card.Footer>

                            {
                                props.comments.map(com => (

                                    <Comment creator={com.creator} comment={com.comment} />
                                ))
                            }
<<<<<<< Updated upstream


                        </Card.Footer>
=======
                                <BiCommentAdd />

                        </Card.Footer>
                    
>>>>>>> Stashed changes
                    </Card.Body>
                </Card>



         

        </div>
    )
}

export default Post