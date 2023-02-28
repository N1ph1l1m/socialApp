import React from "react";
import   m from "./Main.module.css";

const Main = () => {
  return (
    <main className={m.main_wrap}>
      <div className="main_profile_block" >
      <img
        className={m.main_backgroundProf}
        src="https://gamerwall.pro/uploads/posts/2021-11/1637896192_2-gamerwall-pro-p-oboi-na-rabochii-stol-art-priroda-oboi-na-2.jpg"
        alt="photo1"
      ></img>
      <div className={m.main_wrap_avatar}>
        <img
          className={m.main_item_avatar}
          src="https://i.pinimg.com/originals/49/67/8e/49678e2e351debba4814d109532a2b81.png"
          alt="avatar"
        />
      </div>
      <div className={m.main_profileHeader}>
        <div className={m.main_profileHeader_user}>
          <h2 className={m.user_name}>Tahiro Nakamatsu</h2>
          <div className={m.user_status}>Profile status</div>
        </div>
        <div className={m.main_profileHeader_editProfile}>
          <button className={m.editProfile_button}> 
            Редактировать профиль
          </button>
          <button className={`${m.editProfile_button} ' ' ${m.editProfile_button_more}`}>
            Ещё <span className={m.more_arrow}>↓</span>
          </button>
        </div>
      </div>
      </div>
      
      <div className={m.profile_wrapper}>
          <div className={m.profile_wrapper_content}>
            <div className={m.profile_items_media}>media</div>
            <div className={m.profile_item_addNews}>add</div>
          </div>
          <div className={m.wrapper_social}>
            <div className={m.social_item_friends}>friend</div>
            <div className={m.social_item_gifts}>gif</div>
            <div className={m.social_item_subscribers}>sub</div>
          </div>
      </div>
    </main>
  );
};
export default Main;
