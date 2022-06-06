import React, { useEffect, useState } from 'react'
import { useAxios } from '../../services/axios.service'
import DrinkCard from '../drinkCard/DrinkCard'
import './TopTenDrinkPage.css'

export default function TopTenDrinkPage () {

    const http = useAxios();
    const [ drink, setDrink ] = useState( [] )
    const [ favDrinks, setFavDrinks ] = useState( [] );



    function getRandomDrink () {
        http.getRandomDrink()
            .then( results => {
                console.log( results.data.drink )
                setDrink( results.data.drink )
            } )

    }

    function getUserFavorites ( userId ) {
        http.getUserFavoritesById( userId )
            .then( ( response ) => {
                console.log( response.data.drinks )
                setFavDrinks( response.data.drinks.map( d => d.idDrink ) )
            } )
            .catch( err => console.error( err ) )
    }

    function removeDrinkFromFavList ( id ) {
        setFavDrinks( favDrinks.filter( drinkId => drinkId !== id ) );
    }


    function isDrinkInFavorteList ( id ) {
        return favDrinks.includes( id );
    }

    function addDrinkToFavList ( idDrink ) {
        setFavDrinks( [ ...favDrinks, idDrink ] )
    }

    useEffect( () => {
        getRandomDrink()
    }, [] );

    return (
        <div className='top-drink-root'>
            <h1> Number One Drink in Your Area Right Now:</h1>
            {drink.map( ( d ) => (
                <DrinkCard
                    key={d.idDrink}
                    {...d}
                    isFav={isDrinkInFavorteList( d.idDrink )}
                    setIsNotFav={removeDrinkFromFavList}
                    setIsFav={addDrinkToFavList}
                />
            ) )}

        </div>
    )
}
