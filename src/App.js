  import React from "react";
  import ap from "./App.module.scss";
  import Header from "./components/Header/Header";
  import Nav from "./components/Nav/Nav";
  // import Main from "./components/Main/Main";

  import Dialogs from "./components/Dialogs/Dialogs";
  
  
const App = () => {
  return (
    <div>
      <Header />
      <div className={ap.main_block_wrap}>
        <div className={ap.main_item}>
          <Nav />
          <Dialogs />
          {/* <Main /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
