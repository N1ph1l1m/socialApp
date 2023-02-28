import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';


const App = () => {
return(
  <div>
    <Header/>
    <div className='main_block_wrap'>
    <div className='main_item'>
    <Nav/>
    <Main/>
  </div> 
    </div>
     

  </div>
 
);
} 
 
export default App;
