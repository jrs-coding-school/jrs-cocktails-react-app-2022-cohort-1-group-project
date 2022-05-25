import React, { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';
import './DrinkSearch.css';


export default function DrinkSearch() {




    return (

        <form className='search-bar'>

            <input className='cocktail-search' type="search" placeholder="Search for Cocktail..." />
            <button className='mag-glass' type='submit'>
            </button>
        </form>

    )

}

