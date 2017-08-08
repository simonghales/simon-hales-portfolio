import React, {Component} from 'react';
import './PortfolioProject.css';
import SocialLinks from '../SocialLinks/SocialLinks';

class PortfolioProject extends Component {
  render() {
    return (
      <div className='PortfolioProject'>
        <div className='PortfolioProject__content'>
          <div className='PortfolioProject__media'>
            <div>
              IMAGE GOES HERE...
            </div>
          </div>
          <div className='PortfolioProject__info'>
            <h3>Project Title</h3>
            <h4>Project Subtitle</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque commodi consequuntur cumque
              deserunt dolorum earum error, est fugit hic id illo inventore nesciunt placeat porro quaerat quibusdam
              quisquam sequi.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioProject;