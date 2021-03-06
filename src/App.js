import './App.css';
import DrinkSearch from './components/search/DrinkSearch';
import AdvancedSearch from './components/search/AdvancedSearch';
import RandomCocktailGenerator from './components/randomCocktailGenerator/RandomCocktailGenerator';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import { useState } from 'react';
import { useAxios } from './services/axios.service';
import { useNavigate } from 'react-router-dom';



function App () {

  const [ visible, setVisible ] = useState( true );
  const http = useAxios();
  const navigate = useNavigate();

function onHandleClicked(){
  http.getRandomDrink()
  .then((results)=>{
    var idDrink = results.data.drink[0].idDrink
    navigate(`/cocktail/${idDrink}`)
  })  
}

  return (
    <div className="app-container">
      <div className="logo"><b>Sip, sip, <div className='hooray'>hooray!</div></b></div>

      {!visible ? <DrinkSearch /> : <AdvancedSearch />}

      {visible ? <button className="toggle two" onClick={() => setVisible( !visible )}>Click here to Search by Ingredients</button>
        : <button className="toggle one" onClick={() => setVisible( !visible )}>Click here to Search by Cocktail</button>}
      <br/>
      <div className='or-container'>
        <hr  style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '3px',
          width: '7rem'
        }}/> or find a new fav! <span/> 
        <hr  style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '3px',
          width: '7rem'
        }}/>
        <br/> and
        </div>
      <button 
      className='random-drink-button'
      onClick={onHandleClicked}
      >Shake it up!</button>

      <Footer />

    </div>
  );
}

export default App;
