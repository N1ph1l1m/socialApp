import React from "react";
import pst from "./posts.module.scss";
import Post from "./Post/Post"


const Posts = () => {
    return (
        <div className={pst.posts_wrapper}>
            <Post message="ffff"/>
            <Post/>
            <Post/>
        </div>
          
    );
};
export default Posts;