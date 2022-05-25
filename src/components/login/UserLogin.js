import React, { useState, useRef } from 'react'
import './UserLoginSignup.css'
import { useAxios } from '../../services/axios.service';
import { useNavigate } from 'react-router';
import { useLocalStorage } from '../../services/localstorage.service';

export default function LoginForm() {
  
  const localStorageService = useLocalStorage()
  const http = useAxios()
  var navigate = useNavigate()

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

  function handleFormSubmit(e) {
    e.preventDefault();
    // setIsLoading(true)

    if (formData.username && formData.password) {

      //send formData to API to request login
      http.login(formData)
        .then(results => {
          console.log(results.data)
          localStorageService.saveUser(results.data.user);
          navigate('/')
        }).catch(err => {
          // setIsLoading(false)

          setFormData({ username: '', password: '' });
        })
    }
  }

  return (
    <form className="login-form"
      onSubmit={handleFormSubmit}>
      <h2>Let's save your favorite cocktails!</h2>
      <h3>Login to your account</h3>
      <div>
        <label htmlFor="username">
          username :
        </label>
        <input
          type="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          ref={usernameRef}
          placeholder="username"
          id="username"
          required
        />
      </div>

      <div>
        <label htmlFor="password">
          Password :
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          ref={passwordRef}
          placeholder="password"
          id="password"
          required
        />
        <br />
        <button
          type="submit"
        >
          login
        </button>
      </div>

    </form>

  )
}
