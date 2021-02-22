import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import './Post.css'






const Post = (props) => {
    const post = props.post;
    const {title, id} = post;

    // const history = useHistory();
    // const showDetails = (postId)=>{
    //     history.push(`/postDetail/${id}`);
    // }


    

    return (
        <div className="all-post-area">
            <p>Post Id: {id}</p>
            <h2>{title}</h2> 
            <br/>
            <Link to ={`/postDetails/${id}`}>
                <Button variant="contained" color="primary" size="small">Read More</Button>
            </Link>
        </div>

    );
};

export default Post;