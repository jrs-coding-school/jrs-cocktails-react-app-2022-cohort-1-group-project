import React, { useState } from 'react';
import './AdvancedSearch.css'



export default function AdvancedSearch() {


    return (
        <form className='ingredient-form'>


            <select className='select-bar'>
                <option name="vodka"> Vodka</option>
                <option name="rum">Rum</option>
                <option name="tequila">Tequila</option>
                <option name="whiskey">Whiskey</option>
                <option name="wine">Wine</option>
                <option name="gin">Gin</option>
                <option name="cognac">Cognac</option>
            </select>
            <input className='ingredient-search'
                type="search"
                name="ingredient"

                // value={form.username}
                // onChange={onInputChanged}

                id="ingredient"
                placeholder="Add ingredient"

            />
            <button className='mag-glass' type="submit"></button>

        </form>

    )
}
