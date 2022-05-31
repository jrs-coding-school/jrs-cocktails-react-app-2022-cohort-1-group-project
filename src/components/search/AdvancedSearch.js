import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdvancedSearch.css'



export default function AdvancedSearch () {
    
    const SPIRITS = [
        'vodka',
        'rum',
        'tequila',
        'whiskey',
        'wine',
        'gin',
        'cognac'
    ]
    const navigate = useNavigate();
    const [ spirit, setSpirit ] = useState( SPIRITS[Math.floor(Math.random() * SPIRITS.length)] );
    const [ ingredient, setIngredient ] = useState( '' );


    return (
        <form
            className='ingredient-form'
            onSubmit={e => {
                e.preventDefault();

                if ( ingredient ) {
                    navigate( `/cocktails/${spirit}/${ingredient}` )
                } else {
                    navigate( `/cocktails/${spirit}` )
                }

            }}
        >


            <select
                className='select-bar'
                value={spirit}
                onChange={e => {
                    setSpirit( e.target.value )
                }}
            >
                <option disabled value="">Select A Spirit</option>
                {SPIRITS.map( spirit => (
                    <option value={spirit}>{spirit}</option>
                ) )}

            </select>
            <input
                className='ingredient-search'
                type="search"
                name="ingredient"
                id="ingredient"
                placeholder="  (optional)  add mixer"
                // value={form.username}
                onChange={e => setIngredient( e.target.value )}
            />

            <button className='mag-glass' type="submit"></button>

        </form>

    )
}
