import React from 'react';
import './../App.css';
// import Link form 'react-dom'

const Nav = () =>{
    return(
        <nav className='nav'> 
    <ul className='nav_ul'>
        <li className='nav_li'>
            {/* <Link  /> */}
            <a href='http://localhost:3000/'>Главная</a></li>
        <li className='nav_li'><a href='http://localhost:3000/'>Новости</a></li>
        <li className='nav_li'><a href='http://localhost:3000/'>Друзья</a></li>
        <li className='nav_li'><a href='http://localhost:3000/'>Сообщения</a></li>
        <li className='nav_li'><a href='http://localhost:3000/'>Фотограции</a></li>
        <li className='nav_li'><a href='http://localhost:3000/'>Музыка</a></li>
        <li className='nav_li'><a href='http://localhost:3000/'>Видео</a></li> 
      </ul>
    </nav>
    );
}

export default Nav;