import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAxios } from '../../services/axios.service';

import './Ratings.css'


export default function Ratings({ userId, drinkId }) {


  const http = useAxios();
  const [showReview, setShowReview] = useState([]);
  const [review, setReview] = useState({
    rating: 3,
    comment: ''
  });


  function getUserReviewByDrinkId(id) {
    http.getUserReviewByDrinkId(id)
      .then((response) => {
        console.log(response)
        console.log(userId)
        setShowReview(response.data.results[0]);
      })
      .catch(err => console.error(err))
  }


  function addNewReview() {
    http.addReview(userId, drinkId, review.rating, review.comment)
      .then((response) => {
        console.log(review)
        setReview(response.data.results)
      })
      .catch(err => console.error(err))
  }


  useEffect(() => {
    getUserReviewByDrinkId(drinkId);
    // addNewReview();
  }, [])


  return (
    <form className='review-root' onSubmit={e => {
      e.preventDefault();
      addNewReview();
    }}>
      <h3 className='user-rating'>Reviews:</h3>
      <div className='review-container'>
        <div className='user-rating-container'>
          <p className='user-rating'>{showReview.rating} &#9733;</p>


        </div>
        <div className='user-comment-container'>
          <p className='user-rating'>{showReview.comment}</p>
        </div>
      </div>
      <h4>Leave a review:</h4>
      <div className='leave-review'>
        {/* <select className='select-star-bar' onChange={e => {
          setReview(e.target.value)
        }}>
          <option value="one"> 1 &#9733;</option>
          <option value="two">2 &#9733;</option>
          <option value="three">3 &#9733;</option>
          <option value="four">4 &#9733;</option>
          <option value="five">5 &#9733;</option>

        </select> */}
        <textarea className="review-box" type="search" placeholder='Leave Review...' onChange={e => setReview(e.target.value)}></textarea>
        <button className='submit-review'>Submit</button>
      </div>
    </form>

  )
}
