import React, { useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAxios } from '../../services/axios.service';
import './NavBar.css';
import { useLocalStorage } from '../../services/localstorage.service';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export default function NavBar () {


  const http = useAxios();
  const navigate = useNavigate();
  const { userId } = useParams();
  const ls = useLocalStorage();
  const user = ls.getUser();

  const loginButton = (
    <button onClick={() => {
      navigate('/login')
    }}>
        Log In 
    </button>
)

function onLogoutClicked() {
  ls.removeUser()
  navigate('/')
}
const logoutButton = (
  <button onClick={onLogoutClicked}>
      Log out <FontAwesomeIcon icon={faArrowRightFromBracket}/> 
    </button>
)

const signUpButton = (
  <button onClick={() => {
      navigate('/signup')
  }}>
     Sign up
  </button>
)

const myDrinksButton = (
  <Link to={"/my-drinks"}>
  <button type='button'>My Drinks</button>
</Link>
)

  return (

    <nav className="nav-bar-root">
      <div className='nav-bar-left'>
        <Link to={"/"}>
          <button type='button'><FontAwesomeIcon icon={faGlassCheers} />  Home </button>
        </Link>
        {user ? <span>|</span> : ''}
        {user ? myDrinksButton : ''}
      </div>
      <div className='nav-bar-right'> 
        {user ? '' : signUpButton }
        {user ? '' : <span>|</span>}
        {user ? logoutButton : loginButton } 
       
      </div>
    </nav>

  )
}
