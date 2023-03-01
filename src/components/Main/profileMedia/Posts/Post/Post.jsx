import React from "react";
import ps from "./post.module.css";

const Post = () => {
    return (
          <div className={ps.media_post_wrapper}>
            <div className={ps.media_post_header}></div>
            <div className={ps.media_post_footer}></div>
          </div>
    );
};
export default Post;