import React from 'react';
import Navbar from './Navbar';
import Space from './../assets/space.svg';
import './style.css';



const LandingPage = () =>  {
  return(
    <div className="space">
      <Navbar/>
      <div className="landing-space">
        <img src={Space} alt="Space" className="space-photo"/>
      </div>
      <p className="space-question">Why Space?</p>
      <div className="space-description">
        <p className="space-answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum massa, lacinia lacinia turpis lacinia ut. Nunc consequat mattis aliquet. Vivamus a sem tincidunt orci dictum viverra eget et libero. Donec sit amet massa vel nulla ultricies vehicula non non massa. Mauris imperdiet quam urna, in dapibus nunc cursus vel. Cras commodo venenatis urna vel mollis.</p>
      </div>
      <div space="space-boxes">
        <p>How it Works</p>
      </div>



    </div>
  );
}

export default LandingPage;
