import React, { useEffect, useState } from 'react'
import { useAxios } from '../../services/axios.service';
import './NewReviewForm.css';

export default function NewReviewForm({userId, drinkId}) {

    const [review, setReview] = useState({
        rating: 1,
        comment: ''
    });

    const http = useAxios();

    function addNewReview() {
        http.addReview(userId, drinkId, review.rating, review.comment)
            .then((response) => {
                // console.log(review)
            })
            .catch(err => console.error(err))
    }


    return (
        <form className='review-root' onSubmit={e => {
            e.preventDefault();
            addNewReview();
          }}>
            <select className='select-star-bar' onChange={e => {
                setReview({
                    ...review,
                    rating: Number(e.target.value)
                })
            }}>

                <option value="1">⭐️</option>
                <option value="2">⭐️⭐️</option>
                <option value="3">⭐️⭐️⭐️</option>
                <option value="4">⭐️⭐️⭐️⭐️</option>
                <option value="5">⭐️⭐️⭐️⭐️⭐️</option>

            </select>
            <textarea className="review-box"
                placeholder='Leave Review...'
                value={review.comment}
                onChange={e => {
                    setReview({
                        ...review,
                        comment: e.target.value
                    })
                }}></textarea>
            <button className='submit-review'>Submit</button>
        </form>
    )
}
