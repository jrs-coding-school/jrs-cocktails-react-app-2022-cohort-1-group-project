import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAxios } from '../../services/axios.service';
import DrinkCard from '../drinkCard/DrinkCard'
import './IngredientsLandingPage.css'

export default function IngredientsLandingPage() {
  
    //DrinkCards in here
    //Search by MostPopular in here
    
    const [drinks, setDrinks] = useState([]);
    const http = useAxios();
    const { ingredient, spirit } = useParams();
  
    function getDrinksBySpirit ( spirit ) {
      http.getDrinksBySpirit( spirit )
        .then( ( response ) => {
          console.log(response.data.drink)
          setDrinks( response.data.drink );
        } )
        .catch( err => console.error( err ) )
    }
    
    function getDrinksByIngredients ( spirit, ingredient ) {
      http.getDrinksByTwoIngredients( spirit, ingredient )
        .then( ( response ) => {
          console.log(response.data.drinks)
          setDrinks( response.data.drinks );
        } )
        .catch( err => console.error( err ) )
    }
  
    useEffect( () => {

      if (spirit && !ingredient){
        getDrinksBySpirit(spirit);
        
      } else if (spirit && ingredient){
        getDrinksByIngredients(spirit, ingredient);
      } else {
        // get all drinks
      }
      
      // if searching by 2 ingredients, then run TwoIngredients function
    }, [] )
  
    return (
    <div className="ingredients-page-root">
        <h1> Cocktails with {spirit && ingredient ? `${spirit} & ${ingredient}` : spirit}: </h1>
        <div className='drink-cards-container'>
          {drinks.map( ( drink ) => (
            <DrinkCard key={drink.idDrink}
              {...drink}
            />
          ) )}
        </div>
    </div>
  )
}
