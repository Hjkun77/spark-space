import React from 'react';
import './style.css';

const Footer = () =>  {
  return(
    <footer>
      <div className="footer-buttons">
        <button className="footer-button1"><a href="https://admu.uxsociety.org/uxnchill#home" target="_blank">Vote Now</a></button>
        <button className="footer-button2">Download App</button>
      </div>
      <p className="footer-notes">
      Space is a utility application that was developed for AECES Sparks Summit in the Ateneo de Manila University.
      <br/>
      <br/>
      All rights reserved to Harvey Sison, Tomas Falgui III and Camille Puentespina. © 2018
      </p>
    </footer>
  );
}

export default Footer;
