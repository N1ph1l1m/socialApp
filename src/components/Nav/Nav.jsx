import React from 'react';
import  n from './Nav.module.scss';


const Nav = () =>{
    return(
        <nav className={n.nav}> 
    <ul className={n.nav_ul}>
        <li className={n.nav_li}>
            {/* <Link  /> */}
            <a href='http://localhost:3000/'>Главная</a></li>
        <li className={n.nav_li}><a href='http://localhost:3000/'>Новости</a></li>
        <li className={n.nav_li}><a href='http://localhost:3000/'>Друзья</a></li>
        <li className={n.nav_li}><a href='http://localhost:3000/'>Сообщения</a></li>
        <li className={n.nav_li}><a href='http://localhost:3000/'>Фотограции</a></li>
        <li className={n.nav_li}><a href='http://localhost:3000/'>Музыка</a></li>
        <li className={n.nav_li}><a href='http://localhost:3000/'>Видео</a></li> 
      </ul>
    </nav>
    );
}

export default Nav;