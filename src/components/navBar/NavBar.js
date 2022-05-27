import React, { useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAxios } from '../../services/axios.service';
import './NavBar.css';
import { useLocalStorage } from '../../services/localstorage.service';


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
        Log out
    </button>
)

const signUpButton = (
  <button onClick={() => {
      navigate('/signup')
  }}>
     Sign up  <span>|</span>
  </button>
)

  return (

    <nav className="nav-bar-root">
      <div className='nav-bar-left'>
        <Link to={"/"}>
          <button type='button'>Home</button>
        </Link>
        <span>|</span>
        <Link to={"/my-drinks"}>
          <button type='button'>My Drinks</button>
        </Link>

      </div>
      <div className='nav-bar-right'> 
        {user ? '' : signUpButton }
       
        {user ? logoutButton : loginButton } 
       
      </div>
    </nav>

  )
}
