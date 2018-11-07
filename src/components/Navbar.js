import React from 'react';
import Logo from './../assets/logo.svg';
import './style.css';

const Navbar = () =>  {
  return(
    <nav>
      <img alt="logo" src={Logo}/>
      <ul>
        <li>Home</li>
        <li>Instructions</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
