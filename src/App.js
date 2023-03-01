import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main_block_wrap">
        <div className="main_item">
          <Nav />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
