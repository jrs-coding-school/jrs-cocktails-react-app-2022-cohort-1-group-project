import React, { useEffect, useState } from 'react'
import { useAxios } from '../../services/axios.service'
import DrinkCard from '../drinkCard/DrinkCard'

export default function TopTenDrinkPage () {

    const http = useAxios();
    const [drink, setDrink] = useState([])

    function getRandomDrink () {
        http.getRandomDrink()
            .then( results => {
                console.log( results.data.drink )
                setDrink(results.data.drink)
            } )
            
    }


  useEffect( () => {
        getRandomDrink()
    }, [] );

    return (
        <div>
            <h1> Number One Drink in Your Area Right Now:</h1>
            {drink.map( ( d ) => (
                <DrinkCard 
                key={d.idDrink}
                    {...d}
                />
            ) )}
    
        </div>
    )
}
