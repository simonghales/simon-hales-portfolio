import React, {Component} from 'react';
import './App.css';
import LandingScreen from '../LandingScreen/LandingScreen';
import PortfolioScreen from '../PortfolioScreen/PortfolioScreen';
import SiteBackground from '../SiteBackground/SiteBackground';
import AboutScreen from '../AboutScreen/AboutScreen';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SiteBackground className='App__background'/>
        <div className='App__content'>
          <LandingScreen/>
          <PortfolioScreen/>
          <AboutScreen/>
        </div>
      </div>
    );
  }
}

export default App;