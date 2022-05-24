import './App.css';
import DrinkSearch from './components/search/DrinkSearch';
import AdvancedSearch from './components/search/AdvancedSearch';
import RandomCocktailGenerator from './components/randomCocktailGenerator/RandomCocktailGenerator';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
    
      <DrinkSearch />
      <RandomCocktailGenerator />
      <Footer />
    </div>
  );
}

export default App;


