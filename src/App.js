import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
