import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAxios } from '../../services/axios.service';
import { useLocalStorage } from '../../services/localstorage.service';
import Ratings from '../ratings/Ratings';
import NewReviewForm from '../ratings/NewReviewForm';
import './IndividualDrinkPage.css';

export default function IndividualDrinkPage () {

  const http = useAxios();
  const { drinkId } = useParams();
  const localStorageService = useLocalStorage();
  const user = localStorageService.getUser();
  const [ drink, setDrink ] = useState( {} );


  function getDrinkById ( id ) {
    http.getDrinkById( id )
      .then( ( response ) => {
        console.log( response.data )
        setDrink( response.data.drink );
      } )
      .catch( err => console.error( err ) )
  }

  useEffect( () => {
    getDrinkById( drinkId );
  }, [] )

  return (
    <div className='individual-drink-page-root'>
      <div className='individual-drink-page-card'>
        <img className='ind-drink-image' src={drink.strDrinkThumb} />
        <h1 className='ind-drink-name'>{drink.strDrink}</h1>
        <div className='ingredients-container'>
          {/* <h3>Ingredients:</h3> */}
          <p className='ind-ingredients'>{drink.strIngredient1}</p>
          <p className='ind-ingredients'>{drink.strIngredient2}</p>
          <p className='ind-ingredients'>{drink.strIngredient3}</p>
          <p className='ind-ingredients'>{drink.strIngredient4}</p>
          <p className='ind-ingredients'>{drink.strIngredient5}</p>
          <p className='ind-ingredients'>{drink.strIngredient6}</p>
          <p className='ind-ingredients'>{drink.strIngredient7}</p>
          <p className='ind-ingredients'>{drink.strIngredient8}</p>
        </div>
        <div className='instructions-container'>
          <p className='ind-instructions'>{drink.strMeasure1}</p>
          <p className='ind-instructions'>{drink.strMeasure2}</p>
          <p className='ind-instructions'>{drink.strMeasure3}</p>
          <p className='ind-instructions'>{drink.strMeasure4}</p>
          <p className='ind-instructions'>{drink.strMeasure5}</p>
          <p className='ind-instructions'>{drink.strMeasure6}</p>
          <p className='ind-instructions'>{drink.strMeasure7}</p>
        </div>
        <p className='drink-instructions'>{drink.strInstructions}</p>
      </div>
      <Ratings drinkId={drinkId}
        userId={user.id} />
      <NewReviewForm userId={user?.id} drinkId={drinkId} />

    </div>
  )
}
