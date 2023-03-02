import React from "react";
import m from "./Main.module.scss";
import ProfileBlockHeader from "./profileHeader/ProfileHeader";
import ProfileMedia from "./profileMedia/ProfileMedia"
import ProfileSocial from "./ProfileSocial/ProfileSocial";

const Main = () => {
  return (
    <main className={m.main_wrap}>
      <ProfileBlockHeader/>
      <div className={m.main_item}>
      <ProfileMedia/>
      <ProfileSocial/>
      </div>
      
       </main>
  );
};
export default Main;
