import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../services/axios.service';
import AdvancedSearch from './AdvancedSearch';
import './DrinkSearch.css';


export default function DrinkSearch() {

    const [cocktail, setCocktail] = useState("");
    const navigate = useNavigate();
    const http = useAxios();
    
    function getDrinkId(drinkName){
        http.getDrinksByName(drinkName)
        .then(response =>{
            var cocktailId = response.data.drink[0].idDrink
            setCocktail(cocktailId)
        })
        
    }
    
    return (

        <form 
        className='search-bar'
        onSubmit={e => {
            e.preventDefault();
            getDrinkId(e.target.value);
            navigate(`/cocktail/${cocktail}`);
        }}
        >

            <input 
            className='cocktail-search'
            type="search"
            name='cocktail'
            placeholder="Search for Cocktail..."
            onChange={e => getDrinkId(e.target.value)}
            />
            <button 
            className='mag-glass' 
            type='submit'
            
            >
            </button>
        </form>

    )

}

