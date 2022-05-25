import './DrinkCard.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import './DrinkCard.css'
import { useAxios } from '../../services/axios.service'
import { useLocalStorage } from '../../services/localstorage.service'

export default function DrinkCard ( { idDrink, strDrink, strDrinkThumb, isFav } ) {

  const http = useAxios();
  const localStorageService = useLocalStorage();
  const user = localStorageService.getUser();

  function handleHeartClicked () {
      ///------------- MUST BE ABLE TO UNFAVORITE DRINK (UNFAV IF STATEMENT NOT WORKING ATTTT ALLLLL)----------------//

    if ( isFav ) {
      // remove from favorites
      var isFav = !isFav
      // remove from favorites in database
      // which would mean that it would no longer show up on favorites page
      // so, then, will it be necessary to "unheart" the favorite?

      var userId = user.id || '780219d4-d79f-11ec-856c-6b8b7bc362a1'
      http.deleteFavorite( userId, idDrink )

        .then( results => console.log( userId, idDrink ) )
        .catch( err => console.error( err ) )
    } else {

      var userId = user.id || '780219d4-d79f-11ec-856c-6b8b7bc362a1'

      http.addNewFavorite( userId, idDrink )
        .then( results => console.log( userId, idDrink ) )
        .catch( err => console.error( err ) )
    }
  }


  const outlinedHeart = (
    <div className='icon-container'
      onClick={handleHeartClicked}>
      <FontAwesomeIcon icon={faHeartRegular}/>
    </div> )

  const solidHeart = (
    <div className='icon-container'>
      {/* ADD ONCLICK = NAMED FUNCTION TO UNFAVORITE */}
      <FontAwesomeIcon icon={faHeartSolid}/>
    </div> )

  return (
    <div className='drink-card-root'>
      <div className="image-container">
        <img src={strDrinkThumb} />
      </div>
      <h3>
        {strDrink}
      </h3>
      <div className="icon-container">
        {!isFav ?
          outlinedHeart
          : solidHeart}
      </div>
    </div>
  )
}
