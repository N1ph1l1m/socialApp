import React from "react";
import ps from "./post.module.scss";
import like from "./icons/like_clear.png";
import coment from "./icons/coment.png";
import share from "./icons/share.png";
// import image2 from "./icons/1.png";

const Post = (props) => {
  return (
    <div className={ps.media_post_wrapper}>
      <div className={ps.media_post_header}>
        <div className={ps.media_post_header_item}>
          <img
            src="https://i.pinimg.com/originals/49/67/8e/49678e2e351debba4814d109532a2b81.png"
            alt="logo"
          />
          <span className={ps.profileName} id="name">
            Tahiro
          </span>
          <span className={ps.profileName} id="lastName">
            Nakamatsu
          </span>
        </div>
      </div>
      <div className={ps.media_post_content}>{props.message}</div>
      <div className={ps.media_post_footer}>
        <div className={ps.media_post_footer_item}>
          <button className={ps.footer_button}>
            <img src={like} alt="like" />
          </button>
          <button className={`${ps.footer_button} ${ps.coment}`}>
            <img src={coment} alt="coment" />
          </button>
          <button className={`${ps.footer_button} ${ps.share}`}>
            <img src={share} alt="share" />
          </button>
        </div>
      </div>
    </div>
  );
};

// const photo = (photo) => {
// return(
//   <div className={ps.media_post_content}>
//               <img src={image2} alt="ffff"></img>
//             </div>
// );
// }
export default Post;
