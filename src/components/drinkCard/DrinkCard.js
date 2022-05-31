import './DrinkCard.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import './DrinkCard.css'
import { useAxios } from '../../services/axios.service'
import { useLocalStorage } from '../../services/localstorage.service'
import { Link } from 'react-router-dom'

export default function DrinkCard({ idDrink, strDrink, strDrinkThumb, isFav, setIsFav, setIsNotFav }) {

  const http = useAxios();
  const localStorageService = useLocalStorage();
  const user = localStorageService.getUser();

  function handleHeartClicked() {
    ///-----------delete drink logic ----------------///    
    if (isFav) {
      // remove from favorites in database
      var userId = user.id

      http.deleteFavorite(userId, idDrink)
        .then(results => {
          // remove from favorites on Favs array
          if (setIsNotFav) {
            setIsNotFav(idDrink)
            // return;
          }
        })
        .catch(err => console.error(err))

    } else {
      ///---------------add drink logic ------------------//
      var userId = user.id

      http.addNewFavorite(userId, idDrink)
        .then(results => {
          // add to Favs array here
          if (setIsFav) {
            setIsFav(idDrink)
          }
          // return;
          console.log(userId, idDrink)
        })
        .catch(err => console.error(err))
    }
  }

  const outlinedHeart = (
    <div className='icon-container'
      onClick={handleHeartClicked}>
      <FontAwesomeIcon icon={faHeartRegular} />
    </div>)

  const solidHeart = (
    <div className='icon-container'
      onClick={handleHeartClicked}>
      <FontAwesomeIcon icon={faHeartSolid} />
    </div>)

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
        {!isFav ?
          outlinedHeart
          : solidHeart}
      </div>
    </div>
  )
}
