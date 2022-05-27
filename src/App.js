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
      {visible ? <DrinkSearch /> : <AdvancedSearch />}
    
      {visible ? <button className="toggle two" onClick={() => setVisible(!visible)}>Click here to Search by Ingredients</button> 
      : <button className="toggle one" onClick={() => setVisible(!visible)}>Click here to Search by Cocktail</button>}
      {/* <RandomCocktailGenerator /> */}
      <Footer />
    </div>
  );
}

export default App;
