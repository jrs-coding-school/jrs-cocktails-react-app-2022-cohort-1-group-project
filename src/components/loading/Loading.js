import React from 'react'
import './Loading.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Loading() {
  return (
    <div className='loading-root'>
        <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}
