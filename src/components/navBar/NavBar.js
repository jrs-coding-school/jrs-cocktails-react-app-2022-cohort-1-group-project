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
     Sign up
  </button>
)

  return (

    <nav className="hidden">
      <div>
        <Link to={"/"}>
          <button type='button'>HOME</button>
        </Link>
        <Link to={"/my-drinks"}>
          My Drinks
        </Link>

      </div>
      <div> 
        {user ? logoutButton : loginButton } 
        {user ? '' : signUpButton }
       
      </div>
    </nav>

  )
}
