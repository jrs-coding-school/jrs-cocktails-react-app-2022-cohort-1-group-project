import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { useAxios } from '../../services/axios.service';
import { useLocalStorage } from '../../services/localstorage.service';
import DrinkCard from '../drinkCard/DrinkCard'
import Loading from '../loading/Loading'
import './MyDrinks.css'

export default function MyDrinksPage ( { } ) {

  const localStorageService = useLocalStorage();

  const [ favDrinks, setFavDrinks ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true )

  const http = useAxios();

  function removeDrinkFromFavList ( id ) {
    setFavDrinks( favDrinks.filter( drink => drink.idDrink !== id ) );
  }

  function getUserFavorites ( userId ) {
    http.getUserFavoritesById( userId )
      .then( ( response ) => {
        console.log( response.data.drinks )
        setFavDrinks( response.data.drinks )
      } )
      .catch( err => console.error( err ) )
      .then( () => {
        setTimeout( () => {
          setIsLoading( false )
        }, 1250 );
      } )
  }

  useEffect( () => {
    var user = localStorageService.getUser();
    getUserFavorites( user?.id )
  }, [] )


  if ( isLoading ) {
    return (
      <div>
        <Loading />
      </div>
    )
  } else if ( favDrinks.length == 0 ) {
    return (
      <div className='no-favs-container'>
        <h1>No Favorites... 
          <br/>
          Yet! 
          <br/>
          <br/>
          <FontAwesomeIcon icon={faGlassCheers} id="icon" size="2x"/>
        </h1>
      </div>
    )
  } else {
    return (
      <div className="drinks-page-root">
        <h1> Favorite Cocktails</h1>
        <div className='drink-cards-container'>
          {favDrinks.map( ( fav ) => (
            <DrinkCard key={fav.idDrink}
              {...fav}
              isFav={true}
              setIsNotFav={removeDrinkFromFavList}
              favDrinks={favDrinks}
              setFavDrinks={setFavDrinks}
            />
          ) )}
        </div>
      </div>
    )
  }
}
