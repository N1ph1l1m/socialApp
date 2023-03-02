import React from "react";
import ph from "./profile_blockHeader.module.scss";

const ProfileBlockHeader = () => {
  return (
    <div className={ph.main_profile_blockHeader}>
      <img
        className={ph.main_backgroundProf}
        src="https://gamerwall.pro/uploads/posts/2021-11/1637896192_2-gamerwall-pro-p-oboi-na-rabochii-stol-art-priroda-oboi-na-2.jpg"
        alt="photo1"
      ></img>
      <div className={ph.main_wrap_avatar}>
        <img
          className={ph.main_item_avatar}
          src="https://i.pinimg.com/originals/49/67/8e/49678e2e351debba4814d109532a2b81.png"
          alt="avatar"
        />
      </div>
      <div className={ph.main_profileHeader}>
        <div className={ph.main_profileHeader_user}>
          <h2 className={ph.user_name}>Tahiro Nakamatsu</h2>
          <div className={ph.user_status}>Profile status</div>
        </div>
        <div className={ph.main_profileHeader_editProfile}>
          <button className={ph.editProfile_button}>
            Редактировать профиль
          </button>
          <button
            className={`${ph.editProfile_button} ' ' ${ph.editProfile_button_more}`}
          >
            Ещё <span className={ph.more_arrow}>↓</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlockHeader;
