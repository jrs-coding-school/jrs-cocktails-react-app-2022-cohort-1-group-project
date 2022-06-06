import React from 'react'
import { useAxios } from '../../services/axios.service'
import Heart from './Heart'

export default function DrinkHeart({ isFav, drinkId, userId, onHearted, onUnhearted }) {

    const http = useAxios();

    function onFavoriteClicked() {
        // add heart to fav list in D.B.

        http.addNewFavorite(userId, drinkId)
            .then(results => {
                // add to Favs array here
                if (onHearted) {
                    onHearted(drinkId)
                }
                // return;
                console.log(userId, drinkId)
            })
            .catch(err => {
                console.error(err)
                // show toast of an error
            })
    }

    function onUnfavoriteClicked() {
        // remove heart from fav list in D.B.

        http.deleteFavorite(userId, drinkId)
            .then(results => {
                // remove from favorites on Favs array
                if (onUnhearted) {
                    onUnhearted(drinkId);
                }
            })
            .catch(err => {
                console.error(err);
                // show error toast message
            })
    }

    return (

        <Heart
            isFav={isFav}
            onFavoriteClicked={onFavoriteClicked}
            onUnfavoriteClicked={onUnfavoriteClicked}
        />

    )
}
