import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAxios } from '../../services/axios.service';
import NewReviewForm from './NewReviewForm';

import './Ratings.css'


export default function Ratings({ userId, drinkId }) {


  const http = useAxios();
  const [showReview, setShowReview] = useState([]);
  
  function getUserReviewByDrinkId(id) {
    http.getUserReviewByDrinkId(id)
      .then((response) => {
        console.log(response)
        console.log(userId)
        setShowReview(response.data.results[0]);
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getUserReviewByDrinkId(drinkId);
    // addNewReview();
  }, [])


  return (
    <div>
      <h3 className='user-rating'>Reviews:</h3>
      <div className='review-container'>
        <div className='user-rating-container'>
          <p className='user-rating'>{showReview.rating} &#9733;</p>


        </div>
        <div className='user-comment-container'>
          <p className='user-rating'>{showReview.comment}</p>
        </div>
      </div>
      <h4 className='leave-review'>Leave a review:</h4>
      <NewReviewForm userId={userId} drinkId={drinkId} />
    </div>

  )
}
