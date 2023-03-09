import React from "react";
import dc from "./dialogCompanion.module.scss";
import avatar from "./icons/user.png";

const DialogCompanion = () => {
  return (
    <div className={dc.dialog_companion_wrap}>
      <div className={dc.dialog_companion_item}>
        <img src={avatar} alt="user" className={dc.dialog_companion_avatar} />

        <div className={dc.dialog_companion_user}>
          <div className={dc.dialog_companion_userName}>
            <span className={dc.dialog_companion_userName}>Name</span>
             <span className={dc.dialog_companion_userName}>2Name</span>
          </div>
          <div className={dc.dialog_companion_userMessage}>
            <span className={dc.dialog_companion_userMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogCompanion;
