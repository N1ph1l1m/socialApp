import React from 'react';
import './../App.css';


const Header = () => {
    return(
<header className='header'>
      <div className='header_wrap'>
      <a href='http://localhost:3000/'><img className="header_logo"src='https://png.pngtree.com/template/20190716/ourlarge/pngtree-triangle-icon-with-letters-a-logo-vector-template-image_228211.jpg' alt="logo"></img></a>
      <input id="search" className='header_search' placeholder='search' autoFocus/>
      </div>
    </header>
    );
    
}
export default Header;