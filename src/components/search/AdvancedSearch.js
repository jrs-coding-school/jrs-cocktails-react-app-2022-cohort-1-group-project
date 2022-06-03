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
    const [ spirit, setSpirit ] = useState( [] );
    const [ ingredient, setIngredient ] = useState( '' );
    const [isSelectedSpirit, setIsSelectedSpirit] = useState(false);

    function spiritSelected(e){
        setSpirit( e.target.value )
        setIsSelectedSpirit(!isSelectedSpirit)
    }

    return (
        <form
            className='ingredient-form'
            onSubmit={e => {
                e.preventDefault();

                if ( ingredient ) {
                    navigate( `/cocktails/${spirit}/${ingredient}` )
                } else {
                    setSpirit(e.target.value)
                    navigate( `/cocktails/${spirit}` )
                }

            }}>


         
            <div
                className='select-bar'
            // value={spirit}
            //     onChange={e => {
            //         setSpirit( e.target.value )
            //     }}
            >
                <div className='btn-group'>
                    <button type="button" className={isSelectedSpirit ? `btn btn-primary selected` : `btn btn-primary`} onClick={spiritSelected} value='whiskey'>Whiskey</button>
                    <button type="button" className={isSelectedSpirit ? `btn btn-primary selected` : `btn btn-primary`} onClick={spiritSelected} value='rum'>Rum</button>
                    <button type="button" className={isSelectedSpirit ? `btn btn-primary selected` : `btn btn-primary`} onClick={spiritSelected} value='gin'>Gin</button>
                    <button type="button" className={isSelectedSpirit ? `btn btn-primary selected` : `btn btn-primary`} onClick={spiritSelected} value='vodka'>Vodka</button>
                    <button type="button" className={isSelectedSpirit ? `btn btn-primary selected` : `btn btn-primary`} onClick={spiritSelected} value='tequila'>Tequila</button>
                    <button type="button" className={isSelectedSpirit ? `btn btn-primary selected` : `btn btn-primary`} onClick={spiritSelected} value='cognac'>Cognac</button>
                    <button type="button" className={isSelectedSpirit ? `btn btn-primary selected` : `btn btn-primary`} onClick={spiritSelected} value='wine'>Wine</button>
                </div>

            </div>

            <input
                className='ingredient-search'
                type="search"
                name="ingredient"
                id="ingredient"
                placeholder=" add a tasty mixer!"
                // value={form.username}
                onChange={e => setIngredient( e.target.value )}
            />

            <button className='mag-glass' type="submit"></button>

        </form>

    )
}


   {/* <select
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

            </select> */}

            
            // SPIRITS[ Math.floor( Math.random() * SPIRITS.length ) ]