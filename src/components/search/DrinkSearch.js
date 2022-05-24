import React from 'react';
import AdvancedSearch from './AdvancedSearch';
import './DrinkSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'


export default function DrinkSearch() {


    return (
        <form className='drink-form'>
            <div className='drink-search'>
                <form className='search-bar'>
                    <input type="search" placeholder="Search for Cocktail..." />
                    <button type='submit'>
                    {/* <FontAwesomeIcon size="2x" icon={faThumbsUp} /> */}
                    </button>
                        {/* <button type="submit">Search</button> */}
                </form>
            </div>

            {/* <div className='ingredient-search'>
                <label className='ingredient' htmlFor="ingredient">
                    Search by Ingredient:
                </label>

                <select>
                    <option name="vodka"> Vodka</option>
                    <option name="rum">Rum</option>
                    <option name="tequila">Tequila</option>
                    <option name="whiskey">Whiskey</option>
                    <option name="wine">Wine</option>
                    <option name="gin">Gin</option>
                    <option name="cognac">Cognac</option>
                </select>
                <input
                    type="text"
                    name="ingredient"

                    // value={form.username}
                    // onChange={onInputChanged}

                    id="ingredient"
                    placeholder="Enter Ingredient"
                    
                />
                <button type='submit'>Search</button>
            </div> */}

        </form>
    )
}

