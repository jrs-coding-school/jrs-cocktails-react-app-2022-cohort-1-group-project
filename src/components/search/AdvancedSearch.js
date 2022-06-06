import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const [ spirit, setSpirit ] = useState( 'whiskey' );
    const [ ingredient, setIngredient ] = useState( '' );

    function spiritSelected ( newSpirit ) {
        setSpirit( newSpirit )
    }

    return (
        <form
            className='ingredient-form'
            onSubmit={e => {
                e.preventDefault();

                if ( ingredient ) {
                    navigate( `/cocktails/${spirit}/${ingredient}` )
                } else {
                    setSpirit( e.target.value )
                    navigate( `/cocktails/${spirit}` )
                }

            }}>



            <div className='btn-group'>
                {SPIRITS.map( ( _spirit ) => (
                    <div className={`spirit ${spirit == _spirit && `selected`}`}
                        onClick={() => spiritSelected( _spirit )}
                    >
                        {_spirit}
                    </div>
                ) )}
            </div>

<div className='ing-search-bar'>
    
            <input
                className='ingredient-search'
                type="search"
                name="ingredient"
                id="ingredient"
                placeholder=" add a tasty mixer!"
                // value={form.username}
                onChange={e => setIngredient( e.target.value )}
                />

                <button className='mag-glass' type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x"/>
                </button>
                </div>
            


        </form>

    )
}

