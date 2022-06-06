import React from 'react'
import './Loading.css'
import ReactDOM from 'react-dom'
import { Shake } from 'reshake'
import shaker1 from '../assets/images/cocktail-shaker.png'
import shaker2 from '../assets/images/NewShaker.png'
import shaker3 from '../assets/images/cocktail-shaker-3.png'





export default function Loading () {
    return (
        <>
            {/* <div className='loading-banner-root'>
                <h3>
                    preparing your cocktail
                </h3>
            </div> */}
            <Shake
                h={50}
                v={50}
                r={0}
                dur={1000}
                int={8}
                max={60}
                fixed={true}
                fixedStop={false}
                freez={false}
            >
                <div className='shaker-container'>

                    <img src={shaker3} width="300rem" className='shaker' />
                </div>
            </Shake>

        </>
    )
}
