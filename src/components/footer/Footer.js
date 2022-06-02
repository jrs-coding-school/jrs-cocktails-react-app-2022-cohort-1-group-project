import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-heading footer-1'>
          <h2 className='footer-title'>Sip Sip Hooray</h2>
          <div className='glass-icon'><FontAwesomeIcon icon={faChampagneGlasses} size="4x" /></div>
        </div>
        <div className='footer-heading footer-2'>
          <h2 className='footer-title'> Feedback? <br/> Connect with the creators</h2>
          <div className='dev-container'>
            <div className='dev1'>
              <span className='name'>Brian Ferri</span>
              <a className='footer-link' href="mailto:bferri4242@gmail.com"><FontAwesomeIcon icon={faEnvelope} />   </a>
              <a className='footer-link' href="https://www.linkedin.com/in/brian-ferri-a3962023a/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div className='dev2'>
              <span className='name'>Kelly Lozoya</span>
              <a className='footer-link' href="mailto:bferri4242@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> </a>
              <a className='footer-link' href="https://www.linkedin.com/in/kellylozoya/"><FontAwesomeIcon icon={faLinkedin} /> </a>
            </div>
            <div className='dev3'>
              <span className='name'>Kristina Trainer</span>
              <a className='footer-link' href="mailto:bferri4242@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> </a>
              <a className='footer-link' href="https://www.linkedin.com/in/kristinatrainer/"><FontAwesomeIcon icon={faLinkedin} /> </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}