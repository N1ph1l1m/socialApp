import React from "react";
import ps from "./profileSocial.module.scss";

const ProfileSocial = () => {
    return (
        <div className={ps.wrapper_social}>
        <div className={ps.social_item_friends}>friend</div>
        <div className={ps.social_item_gifts}>gif</div>
        <div className={ps.social_item_subscribers}>sub</div>
      </div>
    );
};

export default ProfileSocial;