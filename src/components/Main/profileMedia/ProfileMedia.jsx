import React from "react";
import pm from "./profileMedia.module.scss";
import Posts from "./Posts/Posts"

const ProfileMedia = () => {
    return (
    <div className={pm.profile_media_wrapper}>
        <div className={pm.profile_wrapper_content}>
          <div className={pm.profile_items_media}>media</div>
          <div className={pm.profile_item_addNews}>add</div>
          <Posts/>
        </div>
    </div>
    );
};
export default ProfileMedia;