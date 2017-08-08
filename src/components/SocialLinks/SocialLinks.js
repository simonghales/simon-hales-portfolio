import React, {Component} from 'react';
import classNames from 'classnames';
import './SocialLinks.css';

class SocialLinks extends Component {

  props: {
    className?: string
  };

  render() {
    return (
      <div className={
        classNames([
          this.props.className,
          'SocialLinks'
        ])
      }>
        <div className='SocialLinks__linkWrapper'>
          <a className='SocialLinks__link' href='mailto:simonghales@gmail.com'>
            <span>simonghales@gmail.com</span>
          </a>
          <svg className='SocialLinks__link__svg' width='18' height='18' viewBox='0 0 18 18'
               xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.93.286c1.773 0 3.213 1.44 3.213 3.214v10.714c0 1.775-1.44 3.215-3.214 3.215H3.213C1.44 17.43 0 15.99 0 14.213V3.5C0 1.725 1.44.286 3.214.286H13.93zm.356 11.785V7.206c-.212.235-.447.447-.715.614-1.048.69-2.13 1.338-3.168 2.053-.525.368-1.172.77-1.83.77-.66 0-1.306-.402-1.83-.77-1.04-.715-2.133-1.35-3.17-2.065-.257-.167-.458-.413-.715-.603v4.866c0 .593.48 1.073 1.072 1.073h9.284c.592 0 1.072-.48 1.072-1.072zm0-6.394c0-.602-.447-1.105-1.072-1.105H3.93c-.593 0-1.073.48-1.073 1.073 0 .603.625 1.26 1.094 1.574.983.658 2 1.272 2.98 1.92.425.278 1.128.792 1.64.792.515 0 1.218-.515 1.642-.794.993-.647 1.987-1.283 2.98-1.942.435-.29 1.094-.96 1.094-1.518z'
              fill='#000000' fillRule='evenodd'/>
          </svg>
        </div>
        <div className='SocialLinks__linkWrapper'>
          <a className='SocialLinks__link' href='https://twitter.com/TheSimonHales' target='_blank'>
            <span>@TheSimonHales</span>
          </a>
          <svg className='SocialLinks__link__svg' width='18' height='18' viewBox='0 0 18 18'
               xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.286 5.665c-.424.19-.87.313-1.35.38.49-.29.86-.76 1.037-1.306-.457.267-.96.468-1.495.568-.424-.458-1.038-.737-1.708-.737-1.295 0-2.344 1.05-2.344 2.345 0 .18.012.368.056.536C6.53 7.35 4.8 6.425 3.638 4.997c-.2.346-.323.758-.323 1.183 0 .813.38 1.528 1.015 1.952-.39-.01-.76-.123-1.116-.29v.022c0 1.138.86 2.087 1.93 2.3-.2.055-.356.088-.568.088-.145 0-.29-.022-.435-.044.302.926 1.16 1.607 2.188 1.63-.803.624-1.808 1.004-2.913 1.004-.19 0-.38-.012-.558-.034 1.038.66 2.266 1.05 3.594 1.05 4.31 0 6.675-3.572 6.675-6.675 0-.1 0-.2-.01-.3.456-.325.858-.738 1.17-1.218zM17.143 3.5v10.714c0 1.775-1.44 3.215-3.214 3.215H3.213C1.44 17.43 0 15.99 0 14.213V3.5C0 1.725 1.44.286 3.214.286H13.93c1.773 0 3.213 1.44 3.213 3.214z'
              fill='#000000' fillRule='evenodd'/>
          </svg>
        </div>
        <div className='SocialLinks__linkWrapper'>
          <a className='SocialLinks__link' href='https://www.linkedin.com/in/thesimonhales/'>
            <span>Simon Hales</span>
          </a>
          <svg className='SocialLinks__link__svg' width='18' height='18' viewBox='0 0 18 18'
               xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.645 14.638h2.578V6.893H2.645v7.745zM5.39 4.504c-.01-.758-.557-1.34-1.44-1.34-.88 0-1.46.582-1.46 1.34 0 .737.557 1.34 1.427 1.34h.012c.903 0 1.46-.603 1.46-1.34zm3.83 3.48v.036h-.024l.023-.035zm0 0v-1.09H6.64s.034.724 0 7.744h2.58v-4.33c0-.223.01-.458.077-.625.19-.458.614-.937 1.328-.937.926 0 1.295.703 1.295 1.752v4.14h2.578v-4.442c0-2.377-1.273-3.482-2.97-3.482-1.353 0-1.97.737-2.31 1.27zM17.142 3.5v10.714c0 1.775-1.44 3.215-3.214 3.215H3.213C1.44 17.43 0 15.99 0 14.213V3.5C0 1.725 1.44.286 3.214.286H13.93c1.773 0 3.213 1.44 3.213 3.214z'
              fill='#000000' fillRule='evenodd'/>
          </svg>
        </div>
      </div>
    );
  }
}

export default SocialLinks;