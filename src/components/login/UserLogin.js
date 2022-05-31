import React, { useState, useRef, useEffect } from 'react'
import './UserLoginSignup.css'
import { Link } from "react-router-dom";
import { useAxios } from '../../services/axios.service';
import { useNavigate } from 'react-router';
import { useLocalStorage } from '../../services/localstorage.service';

export default function LoginForm() {

  const localStorageService = useLocalStorage()
  const http = useAxios()
  var navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const usernameRef = useRef(null);
  const passwordRef = useRef(null)

  function handleChange(e) {
    let value = e.target.value
    let name = e.target.name

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function attemptLogIn() {
    setIsLoading(true)
    if (formData.username && formData.password) {
      http.login(formData)
        .then(results => {
          console.log(results.data)
          alert("Welcome Back!")
          localStorageService.saveUser(results.data.user);
          navigate('/')
        }).catch(err => {
          setIsLoading(false)
          console.log(err)
          alert("Oops, try again. Username or Password was incorrect.")
          setFormData({ username: '', password: '' });
        })
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      attemptLogIn()
    }, 1000)
  }

  useEffect(() => {
    usernameRef.current.focus()
  }, [])



  return (
    <div className='user-pages'>
      <form className="login-form"
        onSubmit={handleFormSubmit}>
        <h2> Welcome back </h2>
        <h1>Let's find your account</h1>
        <div className='input-container'>
          <div className='login-input'>
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
            className='login-button'
          >
              Login
          </button>
          <br />
          <br />
          <p className="cta-switch-container">Not a member?
            <Link to="/signup">
              <p>Sign up now</p>
            </Link>
          </p>
        </div>

      </form>
    </div>
  )
}
