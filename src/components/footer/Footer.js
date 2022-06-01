import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

export default function Footer() {
  return (
    <footer className='homepage-footer'>
      <div className='footer-root'>
        <p className='email-icon'><FontAwesomeIcon icon={faEnvelope} /><span className='email-text'>E-mail Us</span><br />
          <a href="mailto:staff@sipsiphooray.com">staff@sipsiphooray.com</a></p>
          <div className='call-us'>
          <FontAwesomeIcon icon={faPhone} /><span className='phone-text'>Call Us</span> 
          </div>
          <div className='phone-number'>
            1 900 385 6389
          </div>
        </div>
    </footer>
  )
}
