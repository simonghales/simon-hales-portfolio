import React, {Component} from 'react';
import './PortfolioScreen.css';
import PortfolioProject from '../PortfolioProject/PortfolioProject';

class PortfolioScreen extends Component {
  render() {
    return (
      <div className='PortfolioScreen'>
        <PortfolioProject/>
        <PortfolioProject/>
        <PortfolioProject/>
      </div>
    );
  }
}

export default PortfolioScreen;