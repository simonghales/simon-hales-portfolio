import React, {Component} from 'react';
import './LandingScreen.css';
import SocialLinks from '../SocialLinks/SocialLinks';

class LandingScreen extends Component {
  render() {
    return (
      <div className='LandingScreen'>
        <div className='LandingScreen__content'>
          <div className='LandingScreen__introInfo'>
            <h1 className='LandingScreen__introInfo__title'>
              <span className='LandingScreen__introInfo__title__name'>Simon Hales</span>
              <span className='LandingScreen__introInfo__title__role'>Dev & Design</span>
            </h1>
            <SocialLinks className='LandingScreen__socialLinks'/>
          </div>
          <div className='LandingScreen__nextPreview'>
            <div className='LandingScreen__nextPreview__title'>
              <span>portfolio</span>
              <span className='LandingScreen__nextPreview__title__icons'>
                {/*<svg className='LandingScreen__nextPreview__title__icons__line' width='68' height='56' viewBox='0 0 68 56' xmlns='http://www.w3.org/2000/svg'><path*/}
                {/*d='M.28 1.637c0-.106.023-.217.068-.333.044-.115.11-.217.2-.306.177-.16.39-.24.64-.24.248 0 .46.08.64.24l52.047 52.047 11.86-11.86c.178-.178.39-.267.64-.267s.462.09.64.266c.177.178.266.39.266.64s-.088.462-.265.64l-12.5 12.5c-.178.178-.392.267-.64.267-.25 0-.462-.088-.64-.266L.548 2.304c-.09-.09-.156-.19-.2-.307-.045-.115-.067-.235-.067-.36z'*/}
                {/*fill='#000000' fillRule='evenodd'/></svg>*/}
                <svg className='LandingScreen__nextPreview__title__icons__mainAbove' width='28' height='16'
                     viewBox='0 0 28 16' xmlns='http://www.w3.org/2000/svg'><path
                  d='M.28 1.637c0-.106.023-.217.068-.333.044-.115.11-.217.2-.306.177-.16.39-.24.64-.24.248 0 .46.08.64.24l12.047 12.047 11.86-11.86c.178-.178.39-.267.64-.267s.462.09.64.266c.177.178.266.39.266.64s-.088.462-.265.64l-12.5 12.5c-.178.178-.392.267-.64.267-.25 0-.462-.088-.64-.266L.548 2.304c-.09-.09-.156-.19-.2-.307-.045-.115-.067-.235-.067-.36z'
                  fill='#000000' fillRule='evenodd'/></svg>
                <svg className='LandingScreen__nextPreview__title__icons__main' width='28' height='16'
                     viewBox='0 0 28 16' xmlns='http://www.w3.org/2000/svg'><path
                  d='M.28 1.637c0-.106.023-.217.068-.333.044-.115.11-.217.2-.306.177-.16.39-.24.64-.24.248 0 .46.08.64.24l12.047 12.047 11.86-11.86c.178-.178.39-.267.64-.267s.462.09.64.266c.177.178.266.39.266.64s-.088.462-.265.64l-12.5 12.5c-.178.178-.392.267-.64.267-.25 0-.462-.088-.64-.266L.548 2.304c-.09-.09-.156-.19-.2-.307-.045-.115-.067-.235-.067-.36z'
                  fill='#000000' fillRule='evenodd'/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingScreen;