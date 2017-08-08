import React, {Component} from 'react';
import './AboutScreen.css';

class AboutScreen extends Component {
  render() {
    return (
      <div className='AboutScreen'>
        <div className='AboutScreen__content'>
          <div>
            boring list of skills
          </div>
          <div>
            brief description
          </div>
          <div>
            contact details
          </div>
        </div>
      </div>
    );
  }
}

export default AboutScreen;