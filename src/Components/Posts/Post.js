import React from 'react'
import './Post.css'
// import Avatar from '@mui/material/Avatar';
import Avatar from 'react-avatar';

function Post({ creator, image, caption, comments }) {
    return (
        <div className="post">
            <div className="post_header">

                <Avatar 
                className="post_avatar" 
                githubHandle={image}
                src={image}
                size={40} 
                round="20px" 
                />

                <h3>{creator}</h3>
                {/* header-> avatar +creator */}
            </div>
            <img
                className="post_image"
                // src="https://patterns.dev/img/reactjs/react-logo@3x.svg/"
                src={image}

            />
            {/* image */}

            <h4
                className="post_text">
                <strong>{creator}</strong>
                {caption}
            </h4>

            {/* creator + caption */}
        </div>
    )
}

export default Post