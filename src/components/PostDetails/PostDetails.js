import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';
import './PostDetails.css';
import Button from '@material-ui/core/Button';


const PostDetails = () => {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);
        
    const {title, body, userId, id} = postDetail;

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    } ,[])
    
    useEffect(() => {
        const url= `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setComments(data))
    },[])


    
    return (
        <div className="postDetails">
            <div className="post-area">
                <small>User Id: {userId}, Id: {id}</small>
                <h1>{title}</h1>
                
                <p>{body}</p>
                
                <br/><br/><br/>
                <h4><u>Comments</u></h4>
                <br/>
                
                {
                    comments.map(comment =><PostComment key={userId} comment ={comment}></PostComment> )
                }
                <br/>
                <Link to ="/home">
                <Button  variant="contained" color="secondary">Go To Home</Button></Link>
            </div>
            
        </div>
    );
};

export default PostDetails;