import React from "react";
import pst from "./posts.module.css";
import Post from "./Post/Post"

const Posts = () => {
    return (
        <div className={pst.posts_wrapper}>
            <Post/>
            <Post/>
            <Post/>
        </div>
          
    );
};
export default Posts;