import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useAxios } from '../../services/axios.service';
import './NavBar.css'

export default function NavBar () {


  const http = useAxios();
  const { userId } = useParams();

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
      {/* <div className='title'>Whiskey Business</div> */}
      <div>
        <Link to="/signup">
          <button type="button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button type="button">Log In</button>
        </Link>
      </div>
    </nav>

  )
}
