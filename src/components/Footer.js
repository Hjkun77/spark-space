import React from 'react';
import './style.css';

const Footer = () =>  {
  return(
    <footer>
      <div className="footer-buttons">
        <button className="footer-button1">Preview App</button>
        <button className="footer-button2">Download App</button>
      </div>
      <p className="footer-notes">
      Space is a utility application that was developed for AECES Sparks Summit in the Ateneo de Manila University.
      <br/>
      All rights reserved to Harvey Sison, Tomas Falgui III and Camille Puentespina. © 2018
      </p>
    </footer>
  );
}

export default Footer;
