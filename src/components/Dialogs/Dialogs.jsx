import React from "react";
import dl from "./dialogs.module.scss";
import searchIcon from "./icons/search.png";
import addConf from "./icons/addConf.png";
import settings from "./icons/settings.png";
import messageBlock_title from "./icons/messageBlock_title.png";
import DialogCompanion from "./dialogCompanion/DialogCompanion";

const Dialogs = () => {
  return (
    <div className={dl.dialogsWrapper}>
      <div className={dl.dialogsItem}>
        <div className={dl.dialogs_users}>
          <div className={dl.dialogs_users_wrap}> 
          <div className={dl.dialogs_search_wrap}>
            <div className={dl.dialogs_search_item}>
              <div className={dl.dialogs_search_block}>
                <img
                  src={searchIcon}
                  alt="search"
                  className={dl.dialogs_search_icons}
                />
                <input
                  className={dl.dialog_search_input}
                  type="search"
                  value={"Поиск"}
                />
              </div>
              <div className={dl.dialogs_block_search_icon}>
                <img
                  src={addConf}
                  alt="search"
                  className={dl.dialogs_search_icons}
                />
                <img
                  src={settings}
                  alt="search"
                  className={dl.dialogs_search_icons}
                />
              </div>
            </div>
          </div>
          <DialogCompanion/>
          <DialogCompanion/>
          <DialogCompanion/>
          <DialogCompanion/>
          <DialogCompanion/>
          <DialogCompanion/>
          <DialogCompanion/>
          </div>
        </div>
        <div className={dl.dialogs_messageBlock}>
          <div className={dl.dialogs_messageBlock_item}>
            <div className={dl.messageBlock_title_wrap}>
              <img
                src={messageBlock_title}
                alt="messageBlock_title"
                className={dl.messageBlock_title_icon}
              />
              <h3 className={dl.messageBlock_title_text}>
                Выберите чат <br /> или{" "}
                <a href="//" className={dl.messageBlock_title_link}>
                  создайте новый
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
