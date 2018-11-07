import React from 'react';
import Navbar from './Navbar';
import Boxes from './Boxes';
import Space from './../assets/imagine.svg';
import './style.css';



const LandingPage = () =>  {
  return(
    <div className="space">
      <Navbar/>
      <div className="imagine-space"></div>
      <p className="space-question">Why Space?</p>
      <div className="space-description">
        <p className="space-answer">Space is a web and mobile application that helps users reduce the time being wasted in finding a parking space in a specific venue. Space allows individuals to view the parking situation of a particular venue real time. Moreover, it allows users to reserve the space that they want beforehand. Space provides convienience and comfort in finding the right space for you. </p>
      </div>
      <div className="space-boxes">
        <p>How it Works</p>
        <div className="space-grid">
          <div className="box1"><Boxes title="Open App" paragraph="You don't have to waste your precious time in finding a parking space. You just need to open the platform in any device through a mobile app or a website. What a steal! Only one click away"/></div>
          <div className="box2"><Boxes title="Plan Parking" paragraph="You have the autonomy and control on which parking you want to reserve or see. It's integrated with Google API and has an AI which suggestes the best space for you but the ultimate decision would stil come from the user."/></div>
          <div className="box3"><Boxes title="Find Your Space" paragraph="The platform or app allows users to show which parking space are available and who are interested on a space or who reserved it already real-time."/></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
