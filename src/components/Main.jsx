import React from "react";
import "./../App.css";

const Main = () => {
  return (

    <main className="main_wrap">
      <div className="main_profile_block" >
      <img
        className="main_backgroundProf"
        src="https://gamerwall.pro/uploads/posts/2021-11/1637896192_2-gamerwall-pro-p-oboi-na-rabochii-stol-art-priroda-oboi-na-2.jpg"
        alt="photo1"
      ></img>
      <div className="main_wrap_avatar">
        <img
          className="main_item_avatar"
          src="https://i.pinimg.com/originals/49/67/8e/49678e2e351debba4814d109532a2b81.png"
          alt="avatar"
        />
      </div>
      <div className="main_profileHeader">
        <div className="main_profileHeader_user">
          <h2 className="user_name">Tahiro Nakamatsu</h2>
          <div className="user_status">Profile status</div>
        </div>
        <div className="main_profileHeader_editProfile">
          <button className="editProfile_button ">
            {" "}
            Редактировать профиль
          </button>
          <button className="editProfile_button editProfile_button_more">
            {" "}
            Ещё <span className="more_arrow">↓</span>
          </button>
        </div>
      </div>
      </div>
      
      <div className="profile_wrapper">
          <div className="profile_wrapper_content">
            <div className="profile_items_media">media</div>
            <div className="profile_item_addNews">add</div>
          </div>
          <div className="wrapper_social">
            <div className="social_item_friends">friend</div>
            <div className="social_item_gifts">gif</div>
            <div className="social_item_subscribers"> sub</div>
          </div>
      </div>
    </main>
  );
};
export default Main;
