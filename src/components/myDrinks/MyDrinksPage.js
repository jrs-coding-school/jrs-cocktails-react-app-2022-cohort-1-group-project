import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAxios } from '../../services/axios.service';
import { useLocalStorage } from '../../services/localstorage.service';
import DrinkCard from '../drinkCard/DrinkCard'
import './MyDrinks.css'

export default function MyDrinksPage ( { } ) {

  const localStorageService = useLocalStorage();

  const [ favDrinks, setFavDrinks ] = useState( [] );
  const [isLoading, setIsLoading] = useState(false)

  const http = useAxios();

  function getUserFavorites ( userId ) {
    http.getUserFavoritesById( userId )
      .then( ( response ) => {
        setFavDrinks( response.data.drinks )
      } )
      .catch( err => console.error( err ) )
  }

  useEffect( () => {
    var user = localStorageService.getUser();
    getUserFavorites( user?.id )
  }, [] )

  // ------------------NEED TO COMPLETE LOADING LOGIC-----------------//
  
  if(isLoading){
    return(
      <div>
        Loading...
      </div>
    )
  } else if ( favDrinks.length == 0 ) {
    return (
      <div>
        <h1>NO FAV DRINKS YET :(</h1>
      </div>  
  )
  } else {
    return (
      <div className="drinks-page-root">
        <h1> MY DRINKS</h1>
        <div className='drink-cards-container'>
          {favDrinks.map( ( fav ) => (
            <DrinkCard key={fav.idDrink}
              {...fav}
              isFav={true}
            />
          ) )}
        </div>
      </div>
    )
  }
}
