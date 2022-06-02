import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAxios } from '../../services/axios.service';
import { useLocalStorage } from '../../services/localstorage.service';
import Ratings from '../ratings/Ratings';
import NewReviewForm from '../ratings/NewReviewForm';
import './IndividualDrinkPage.css';
import DrinkHeart from '../heart/DrinkHeart';
import TopTenDrinkPage from './TopTenDrinkPage';

export default function IndividualDrinkPage() {

  const http = useAxios();
  const localStorageService = useLocalStorage();
  const user = localStorageService.getUser();

  const { drinkId } = useParams();

  const [drink, setDrink] = useState({});
  const [favDrinks, setFavDrinks] = useState([]);
  const [isFav, setIsFav] = useState(false);

  function getDrinkById(id) {
    http.getDrinkById(id)
      .then((response) => {
        console.log(response.data)
        setDrink(response.data.drink);
      })
      .catch(err => console.error(err))
  }
  function getUserFavorites(userId) {
    http.getUserFavoritesById(userId)
      .then((response) => {
        console.log(response.data.drinks)
        setFavDrinks(response.data.drinks)
      })
      .catch(err => console.error(err))
  }

  function isDrinkInFavorteList(drinkId) {
    for (let drink of favDrinks) {
      if (drink.idDrink == drinkId) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    getDrinkById(drinkId);
    getUserFavorites(user.id)
  }, [])

  useEffect(() => {
    // if array is not empty, then check drinkId (params) is in fav array
    setIsFav(isDrinkInFavorteList(drinkId));
  }, [favDrinks])

  if (!drinkId) {
    return (
      <TopTenDrinkPage />
    )
  } else {
    return (
      <div className='individual-drink-page-root'>

        <div className='individual-drink-page-card'>
          <img className='ind-drink-image' src={drink.strDrinkThumb} />
          <h1 className='ind-drink-name'>{drink.strDrink}</h1>

          <DrinkHeart
            isFav={isFav}
            drinkId={drinkId}
            userId={user.id}

            onHearted={() => {
              setIsFav(true)
            }}
            onUnhearted={() => {
              setIsFav(false);
            }}
          />

          <div className='ingredients-container'>
            <h3>Ingredients:</h3>
            <p className='ind-ingredients'>{drink.strIngredient1}</p>
            <p className='ind-ingredients'>{drink.strIngredient2}</p>
            <p className='ind-ingredients'>{drink.strIngredient3}</p>
            <p className='ind-ingredients'>{drink.strIngredient4}</p>
            <p className='ind-ingredients'>{drink.strIngredient5}</p>
            <p className='ind-ingredients'>{drink.strIngredient6}</p>
            <p className='ind-ingredients'>{drink.strIngredient7}</p>
            <p className='ind-ingredients'>{drink.strIngredient8}</p>
            <p className='ind-ingredients'>{drink.strIngredient9}</p>
          </div>

          <div className='instructions-container'>
            <p className='ind-instructions'>{drink.strMeasure1}</p>
            <p className='ind-instructions'>{drink.strMeasure2}</p>
            <p className='ind-instructions'>{drink.strMeasure3}</p>
            <p className='ind-instructions'>{drink.strMeasure4}</p>
            <p className='ind-instructions'>{drink.strMeasure5}</p>
            <p className='ind-instructions'>{drink.strMeasure6}</p>
            <p className='ind-instructions'>{drink.strMeasure7}</p>
            <p className='ind-instructions'>{drink.strMeasure8}</p>
            <p className='ind-instructions'>{drink.strMeasure9}</p>
          </div>
          <p className='drink-instructions'>{drink.strInstructions}</p>
        </div>

        <Ratings drinkId={drinkId}
          userId={user?.id} />

        <h4 className='leave-review'>Leave a review:</h4>
        <NewReviewForm userId={user?.id} drinkId={drinkId} />
      </div>
    )
  }
}
