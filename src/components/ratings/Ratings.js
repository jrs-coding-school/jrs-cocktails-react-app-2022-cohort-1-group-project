import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAxios } from '../../services/axios.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Ratings.css'


export default function Ratings() {


  const http = useAxios();
  const { id } = useParams();
  const [showReview, setShowReview] = useState([]);
  const [addReview, setAddReview] = useState({});


  function getUserReviewByDrinkId(id) {
    http.getUserReviewByDrinkId(id)
      .then((response) => {
        console.log(response)
        setShowReview(response.data.results[0]);
      })
      .catch(err => console.error(err))
  }


  function addAReview({review}) {
    http.addReview(review)
    .then((response) => {
    setAddReview(response.data.results)
    })
    .catch(err => console.error(err))
  }


  useEffect(() => {
    getUserReviewByDrinkId(id);
    addAReview(id);
  }, [])


  return (
    <form className='review-root'>
      <h3 className='user-rating'>Reviews:</h3>
      <div className='review-container'>
        <div className='user-rating-container'>
          <p className='user-rating'>{showReview.rating}<FontAwesomeIcon icon={faStar} /></p>


        </div>
        <div className='user-comment-container'>
          <p className='user-rating'>{showReview.comment}</p>
        </div>
      </div>
        <h4>Leave a review:</h4>
      <div className='leave-review'>
        <select className='select-star-bar'>
                <option name="one"> 1 &#9733;</option>
                <option name="two">2 &#9733;</option>
                <option name="three">3 &#9733;</option>
                <option name="four">4 &#9733;</option>
                <option name="fix">5 &#9733;</option>
             
            </select>
        <textarea className="review-box" type="search"></textarea>
        <button className='submit-review' onSubmit={addReview}>Submit</button>
      </div>
    </form>

  )
}
