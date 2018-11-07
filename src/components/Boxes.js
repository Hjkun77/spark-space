import React from 'react';
import Icon from './../assets/icon.png';
import './style.css';

const Boxes = (props) => {
  return(
    <div className="boxes">
      <img src={Icon} alt="Icon" width="100"/>
      <h4>{props.title}</h4>
      <div className="box-container">
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Boxes;
