import './App.css';
import DrinkSearch from './components/search/DrinkSearch';
import AdvancedSearch from './components/search/AdvancedSearch';
import RandomCocktailGenerator from './components/randomCocktailGenerator/RandomCocktailGenerator';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import { useState } from 'react';

function App() {

  const [visible, setVisible] = useState(true);



  return (
    <div className="App">
      <NavBar />

      {visible ? <DrinkSearch /> : <AdvancedSearch />}
      {/* <div className='home-container'>
      <button className="toggle one" onClick={() => setVisible(!visible)}>Search by Cocktail</button>
      <button className="toggle two" onClick={() => setVisible(!visible)}>Search by Ingredient</button>
      </div> */}
      {visible ? <button className="toggle two" onClick={() => setVisible(!visible)}>Search by Ingredient</button> : <button className="toggle one" onClick={() => setVisible(!visible)}>Search for Cocktail</button>}     
      <RandomCocktailGenerator />
      <Footer />
    </div>
  );
}

export default App;


