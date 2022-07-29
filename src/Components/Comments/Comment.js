import React from 'react'
import './Comment.css'
import Avatar from 'react-avatar';
import Card from 'react-bootstrap/Card';
function Comment(props) {
    const im = "https://patterns.dev/img/reactjs/react-logo@3x.svg/"
    return (
        <div className="comment" >
            <Card style={{ width: '400px' }}>
                <Card.Header style={{ width: '400px', padding: '10px' }}>
                <Avatar className="post_avatar" githubHandle={props.image} name={props.creator} size={25} round="20px" />
                    <strong> {props.creator}</strong>

                </Card.Header>

                <Card.Body>    

<Card.Text >
    <div className="UserComment" >{props.comment}</div>
</Card.Text>






</Card.Body>

 
        
               </Card>
                
        
        </div>
    )
}

export default Comment