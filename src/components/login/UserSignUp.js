import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAxios } from '../../services/axios.service';
import { useLocalStorage } from '../../services/localstorage.service';


import './UserLoginSignup.css'

export default function UserSignUp() {

  var http = useAxios()
  const localStorageService = useLocalStorage()
  var navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [isUsernameTaken, setIsUsernameTaken] = useState(true);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const timeoutRef = useRef(null);


  function attemptSignUp(formData) {
    http.createNewUser(formData)
      .then(results => {
        console.log(results)
        alert("Account creation was a success!")
        localStorageService.saveUser(results.data.user)
        navigate('/')
      }).catch(err => {
        console.error(err);
        alert("Oops! Username exists! Try something else")
      }
      )
  }


  function handleChange(e) {
    let value = e.target.value
    let name = e.target.name

    setFormData({
      ...formData,
      [name]: value
    });
  }


  function handleFormSubmit(e) {
    e.preventDefault()
    if (formData.username && formData.password && checkIfUsernameIsTaken) {
      attemptSignUp(formData);
    }
  }
  // -----CHECK IF USERNAME IS TAKEN --------------

  function checkIfUsernameIsTaken() {
    http.getUserbyUsername(formData.username)
      .then((res) => {
        console.log('the get route by username was sent! It returned this')
        console.log(formData.username)
        setIsUsernameTaken(true)
      })
      .catch((err) => {
        console.log(err);
        let statusCode = err.response.statusCode
        if (statusCode == 404) {
          setIsUsernameTaken(false)
        } else if (err.response.status == 401) {
          setIsUsernameTaken(true)
        }
        // else {
        //   console.err(err)
        // }
      })
  }

  useEffect(() => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => { checkIfUsernameIsTaken() }, 500)

  }, [formData.username])


  return (
    <div className='user-pages'>
      <form className="sign-up-form"
        onSubmit={handleFormSubmit}>
        <h2>Sip Sip Hooray!</h2>
        <h1>You're taking the first step to saving your favorite cocktails</h1>
        <div className='input-container'>
          <div className='sign-up-input'>
            <label htmlFor="username">
            </label>
            <input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              ref={usernameRef}
              placeholder="Username"
              id="username"
              required
            />
          </div>

          <div className='password-input'>
            <label htmlFor="password">
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              ref={passwordRef}
              placeholder="Password"
              id="password"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className='sign-up-button'
          >Create my account!
          </button>
          <br />
          <br />
          <div className='cta-switch-container'>
            <p >Already a member?</p>
              <Link to="/login">
                Let's log in
              </Link>
          </div>
        </div>

      </form>
    </div>
  )
}


