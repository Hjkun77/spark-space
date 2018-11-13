import React from 'react';
import Navbar from './Navbar';
import Boxes from './Boxes';
import Space from './../assets/imagine.svg';
import Icon from './../assets/icon.png';
import Icon1 from './../assets/icon1.png';
import Icon2 from './../assets/icon2.png';
import './style.css';



const LandingPage = () =>  {
  return(
    <div className="space">
      <Navbar/>
      <div className="space-image">
          <img src={Space} alt="Space"/>
      </div>
      <div className="container">
        <p className="space-question">Why Space?</p>
        <div className="space-description">
          <p className="space-answer">Space is an interactive mobile utility application that provides a comprehensive solution for the problme of parking of Ateneans with the click of a button. It offers real time updates on all available parking spaces and enhances contact with other drivers to promot initiative for slot reservation.</p>
        </div>
        <div className="space-boxes">
          <p>How it Works</p>
          <div className="space-grid">
            <div className="box1"><Boxes image={Icon} title="Open App" paragraph="You don't have to waste your precious time in finding a parking space. You just need to open the platform in any device through a mobile app or a website. What a steal! Only one click away"/></div>
            <div className="box2"><Boxes image={Icon1} title="Plan Parking" paragraph="You have the autonomy and control on which parking you want to reserve or see. View real-time how many people are looking currently for the space or reserve it immediately."/></div>
            <div className="box3"><Boxes image={Icon2} title="Find Your Space" paragraph="The platform or app allows users to show which parking space are available and who are interested on a space or who reserved it already real-time."/></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
