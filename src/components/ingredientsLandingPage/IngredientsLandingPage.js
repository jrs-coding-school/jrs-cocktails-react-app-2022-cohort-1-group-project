import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAxios } from '../../services/axios.service';
import DrinkCard from '../drinkCard/DrinkCard'
import TopTenDrinkPage from '../individualDrinkPage/TopTenDrinkPage';
import Loading from '../loading/Loading'
import './IngredientsLandingPage.css'

export default function IngredientsLandingPage () {

  //Search by MostPopular in here

  const [ drinks, setDrinks ] = useState( [] );
  const [ favDrinks, setFavDrinks ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true );


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
      .then( () => {
        setTimeout( () => {
          setIsLoading( false )
        }, 1250 );
      } )
  }

  function getDrinksByIngredients ( spirit, ingredient ) {
    http.getDrinksByTwoIngredients( spirit, ingredient )
      .then( ( response ) => {
        console.log( response.data.drinks )
        setDrinks( response.data.drinks );
      } )
      .catch( err => console.error( err ) )
      .then( () => {
        setTimeout( () => {
          setIsLoading( false )
        }, 1000 );
      } )
  }

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
    } else if ( !spirit ) {
      setTimeout( () => {
        setIsLoading( false )
      }, 1000 );
    }
  }, [] )

  if ( isLoading ) {
    return (
      <div>
        <Loading />
      </div>
    )
  } else if ( drinks.length == 0 && !spirit ) {
    return (
      <TopTenDrinkPage />
    )
  } else if ( drinks.length == 0 ) {
    return (

      <h1>Too Creative! We don't have any drinks with those two ingredients.</h1>

    )
  }
  else {
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
              isFav={isDrinkInFavorteList( drink.idDrink )}
              setIsNotFav={removeDrinkFromFavList}
              setIsFav={addDrinkToFavList}
            />
          ) )}
        </div>
      </div>
    )
  }
}
