import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './ReviewCard.css'

export default function ReviewCard ( { id, rating, comment, userId, drinkId, loggedInUserId } ) {

    const ratingArr = Array( Number( rating ) ).fill( '' )

    return (

        <div className='review-container'>

            {/* Array created based on rating number in order to map the correct amount of stars */}
            {/* rating: 2 -> ['', ''] */}
            {/* rating: 5 -> ['', '', '', '', ''] */}
            
            {Array( Number( rating ) ).fill( '' )
                .map( ( star, i ) => (
                    <span
                        key={i}
                        className='user-rating'>
                        <FontAwesomeIcon icon={faStar} color="#f9c804" />
                    </span>
                ) )
            }
            <p className='user-rating'>{comment}</p>
            {/* <p className='user'>{userId}</p> */}
        </div>


    )
}
