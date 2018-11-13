import React from 'react';
import './style.css';

const Boxes = (props) => {
  return(
    <div className="boxes">
      <img src={props.image} alt="Icon" width="100"/>
      <h4>{props.title}</h4>
      <div className="box-container">
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Boxes;
