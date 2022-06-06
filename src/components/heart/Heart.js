import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import './Heart.css';

export default function Heart({ isFav, onFavoriteClicked, onUnfavoriteClicked }) {


    const outlinedHeart = (
        <div className='heart-container empty'
            onClick={onFavoriteClicked} >
            <FontAwesomeIcon
                icon={faHeartRegular}
                size="lg"
            />
        </div>)

    const solidHeart = (
        <div className='heart-container solid'
            onClick={onUnfavoriteClicked} >
            <FontAwesomeIcon
                icon={faHeartSolid}
                size="lg"
            />
        </div>
    )

    return (
        <div className="icon-container">
            {!isFav ?
                outlinedHeart
                : solidHeart}
        </div>
    )
}
