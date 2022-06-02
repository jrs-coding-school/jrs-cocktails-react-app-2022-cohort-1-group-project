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
          <h2 className='footer-title'>Email Us</h2>
          <a href="mailto:bferri4242@gmail.com"><FontAwesomeIcon icon={faEnvelope} />bferri4242@gmail.com</a>
          <a href="mailto:bferri4242@gmail.com"><FontAwesomeIcon icon={faEnvelope} />kellysemail@gmail.com</a>
          <a href="mailto:bferri4242@gmail.com"><FontAwesomeIcon icon={faEnvelope} />kristinasemail@gmail.com</a>
        </div>

        <div className='footer-heading footer-3'>
          <h2 className='footer-title'>Find us on LinkedIn</h2>
          <a href="https://www.linkedin.com/in/brian-ferri-a3962023a/"><FontAwesomeIcon icon={faLinkedin} />
            Brian's LinkedIn</a>
          <a href="https://www.linkedin.com/in/kellylozoya/"><FontAwesomeIcon icon={faLinkedin} />
            Kelly's LinkedIn</a>
          <a href="https://www.linkedin.com/in/kristinatrainer/"><FontAwesomeIcon icon={faLinkedin} />
            Kristina's LinkedIn</a>
        </div>
        
      </div>
    </div>
  )
}
