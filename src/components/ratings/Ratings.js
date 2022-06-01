import React, { useEffect, useState } from 'react';
import { useAxios } from '../../services/axios.service';
import NewReviewForm from './NewReviewForm';

import './Ratings.css'
import ReviewCard from './ReviewCard';

export default function Ratings ( { userId, drinkId } ) {

  const http = useAxios();
  const [ reviews, setReviews ] = useState( [] )

  function getUserReviewByDrinkId ( id ) {
    http.getReviewsByDrinkId( id )
      .then( ( response ) => {
        console.log( response.data )
        setReviews( response.data.reviews );
      } )
      .catch( err => console.error( err ) )
  }

  useEffect( () => {
    getUserReviewByDrinkId( drinkId );
  }, [] )


  return (
    <div>
      <h3 className='user-rating'>Reviews:</h3>

      {reviews.map( ( review ) => (
        <ReviewCard key={review.id}
          {...review}
          // loggedInUserId={user.id}
        />
      ) )}

        <div className='user-comment-container'>
          {/* <p className='user-rating'>{showReview.comment}</p> */}
        </div>
    </div>

  )
}
