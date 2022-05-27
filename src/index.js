import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin  from './components/login/UserLogin'
import UserSignUp from './components/login/UserSignUp';
import IngredientsLandingPage from './components/ingredientsLandingPage/IngredientsLandingPage';
import IndividualDrinkPage from './components/individualDrinkPage/IndividualDrinkPage';
import MyDrinksPage from './components/myDrinks/MyDrinksPage';
import NavBar from './components/navBar/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignUp />}></Route>
          <Route path="/cocktails" element={<IngredientsLandingPage />}></Route>
          <Route path="/cocktails/:spirit" element={<IngredientsLandingPage />}></Route>
          <Route path="/cocktails/:spirit/:ingredient" element={<IngredientsLandingPage />}></Route>
          
          <Route path="/cocktail/:id" element={<IndividualDrinkPage />}></Route>
          
          <Route path="/my-drinks" element={<MyDrinksPage />}></Route>
          <Route path="*" element={<div>404 - page does not exist</div>}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
