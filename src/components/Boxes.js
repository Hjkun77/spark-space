import React from 'react';
import './style.css';

const Boxes = (props) => {
  return(
    <div className="boxes">
      <h4>{props.title}</h4>
      <div className="box-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptates, obcaecati dicta beatae, accusantium aspernatur iure vitae temporibus sed tenetur.</p>
      </div>
    </div>
  );
}

export default Boxes;
