import React from 'react';
import { Link } from 'react-router-dom';
import './PostComment.css'
const PostComment = (props) => {
    const comment = props.comment;
    console.log(comment);
    const {body, email, id, name, postId} = comment;



    return (
        <div className="comment-area">
            <p>{body}</p>
            <div className="comment-person">
                <div className="person-name">
                        <img src={`https://randomuser.me/api/portraits/women/${id}.jpg`} alt=""/>
                        <h6>{name}</h6>
                </div>
                <div>
                        <small style={{display:"block"}}>email: {email}</small>
                        <small> User Id: {id}; </small>
                        <small> Post Id: {postId}</small>
                </div>
                
            </div>
           
        </div>
    );
};

export default PostComment;