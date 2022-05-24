import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (

    <nav className="hidden">
      <div>
        <Link to={"/"}>
          <button type='button'>HOME</button>
        </Link>
        <button type='button'>My Drinks</button>
      </div>
  {/* <div className='title'>Whiskey Business</div> */}
      <div>
        <Link to="/login">
          <button type="button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button type="button">Log In</button>
        </Link>
      </div>
    </nav>

  )
}
