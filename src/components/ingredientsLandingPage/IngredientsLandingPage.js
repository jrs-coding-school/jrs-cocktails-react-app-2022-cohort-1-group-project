import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAxios } from '../../services/axios.service';
import DrinkCard from '../drinkCard/DrinkCard'
import './IngredientsLandingPage.css'

export default function IngredientsLandingPage () {

  //Search by MostPopular in here

  const [ drinks, setDrinks ] = useState( [] );
  const [ favDrinks, setFavDrinks ] = useState( [] );

  const http = useAxios();
  const { ingredient, spirit } = useParams();

  function getUserFavorites ( userId ) {
    http.getUserFavoritesById( userId )
      .then( ( response ) => {
        console.log( response.data.drinks )
        setFavDrinks( response.data.drinks.map( d => d.idDrink ) )
      } )
      .catch( err => console.error( err ) )
  }

  function getDrinksBySpirit ( spirit ) {
    http.getDrinksBySpirit( spirit )
      .then( ( response ) => {
        console.log( response.data.drink )
        setDrinks( response.data.drink );
      } )
      .catch( err => console.error( err ) )
  }

  function getDrinksByIngredients ( spirit, ingredient ) {
    http.getDrinksByTwoIngredients( spirit, ingredient )
      .then( ( response ) => {
        console.log( response.data.drinks )
        setDrinks( response.data.drinks );
      } )
      .catch( err => console.error( err ) )
  }

  //---------IS NEW VALUE A DRINK ID (STRING)? OR AN OBJECT (ENTIRE DRINK)? ----------//
  function addDrinkToFavList ( idDrink ) {
    setFavDrinks( [ ...favDrinks, idDrink ] )
  }

  function removeDrinkFromFavList ( id ) {
    setFavDrinks( favDrinks.filter( drinkId => drinkId !== id ) );
  }

  function isDrinkInFavorteList ( id ) {
    return favDrinks.includes( id );
  }


  useEffect( () => {
    if ( spirit && !ingredient ) {
      getDrinksBySpirit( spirit );

    } else if ( spirit && ingredient ) {
      getDrinksByIngredients( spirit, ingredient );
    } else {
      // get all drinks
    }
  }, [] )

  return (
    <div className="ingredients-page-root">
      <h1> Cocktails with <br />
        <span className='header'>
          {spirit && ingredient ? `${spirit} & ${ingredient}` : spirit}
        </span>
      </h1>
      <div className='drink-cards-container'>
        {drinks.map( ( drink ) => (
          <DrinkCard key={drink.idDrink}
            {...drink}
            isFav={isDrinkInFavorteList(drink.idDrink)}
            setIsNotFav={removeDrinkFromFavList}
            setIsFav={addDrinkToFavList}
          />
        ) )}
      </div>
    </div>
  )
}
