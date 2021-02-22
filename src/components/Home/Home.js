import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import './Home.css'

const Home = () => {
    const [allPost, setAllPost] = useState([]);
    console.log(allPost);

    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/posts";

        fetch(url)
        .then(res =>res.json())
        .then(data => setAllPost(data))
    } ,[])


    return (
        <div className="home-section">
            <h1 style={{margin:"20px 0 30px 0", color:"purple", fontSize: "45px", textDecoration:"underline"}}>
                BLOG PAGE</h1>
            {
                allPost.map(post =><Post key={post.id} post ={post}></Post>)
            }
        </div>
    );
};

export default Home;