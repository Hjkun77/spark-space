import React from 'react';
import Logo from './../assets/logo.svg';
import './style.css';

const Navbar = () =>  {
  return(
    <nav>
      <img alt="logo" src={Logo}/>
      <ul>
        <li><a>Home</a></li>
        <li><a>Instructions</a></li>
        <li><a>Preview</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
