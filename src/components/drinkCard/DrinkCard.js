import './DrinkCard.css'
import React from 'react'
import './DrinkCard.css'
import { useLocalStorage } from '../../services/localstorage.service'
import { Link } from 'react-router-dom'
import DrinkHeart from '../heart/DrinkHeart'

export default function DrinkCard({ idDrink, strDrink, strDrinkThumb, isFav, setIsFav, setIsNotFav }) {

  const localStorageService = useLocalStorage();
  const user = localStorageService.getUser();

  return (
    <div className='drink-card-container'>
      <Link to={`/cocktail/${idDrink}`}>
        <div className='drink-card-root'>
          <div className="image-container">
            <img src={strDrinkThumb} />
          </div>
          <h3>
            {strDrink}
          </h3>
        </div>
      </Link>
      
      <div className="icon-container">

        <DrinkHeart
          isFav={isFav}
          drinkId={idDrink}
          userId={user.id}
          onHearted={setIsFav}
          onUnhearted={setIsNotFav}
        />

      </div>
    </div>
  )
}
