import React, { useState } from 'react'
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

  function attemptSignUp(formData) {
    http.createNewUser(formData)
      .then(results => {
        console.log(results)
        localStorageService.saveUser(results.data.user)
        navigate('/')
      }).catch(err => {
        console.error(err);
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
    if (formData.username && formData.password) {
      attemptSignUp(formData);
    }
  }

  return (
    <div className='user-pages'>
      <form className="sign-up-form"
        onSubmit={handleFormSubmit}>
        <h2>Let's get started!</h2>
        <h1>You're taking the first step to saving your favorite cocktails!</h1>
        <div className='input-container'>
          <div className='sign-up-input'>
            <label htmlFor="username">
            </label>
            <input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              // ref={usernameRef}
              placeholder="username"
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
              // ref={passwordRef}
              placeholder="password"
              id="password"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className='sign-up-button'
          >
            Sip Sip Hooray! Create my account!
          </button>
          <br/>
          <br/>
          <p>Already a member?
            <Link to="/login">
              <p>Let's log in!</p>
            </Link>
          </p>
        </div>

      </form>
    </div>
  )
}



{/* 
            // function attemptSignUp() {
            //   e.preventDefault();
            //   if (formData.email && formData.password) {
            //     console.log(formData);
            //     onSubmit(formData)
            //   }
 */}

//       <form className="sign-up-form"
//         onSubmit={handleFormSubmit}>
//         <h2>Ready to save your favorite cocktails?</h2>
//         <h3>Create a Whiskey Business account today!</h3>

//         <div>
//           <label htmlFor="username">
//             Username :
//           </label>
//           <input
//             type="text"
//             name="username"
//             value={formData.email}
//             onChange={onInputChanged}

//             placeholder="username"
//             id="username"
//             required
//           ></input>
//         </div>

//         <div>
//           <label htmlFor="password">
//             Password :
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.username}  //To do: CHANGE! ex  value={formData.password}
//             onChange={onInputChanged}

//             placeholder="password"
//             id="password"
//             required
//           ></input>
//           <br />
//         </div>
//         <div>
//           <label htmlFor="password">
//             Confirm password :
//           </label>

//           <br />
//         </div>
//         <button
//           type="submit"
//         // disabled={formData.password != formData.password2} // TO DO: If the passwords do not match, trigger warning message, don't submit
//         >
//           {!isLoading ? 'Log in' : <div className='loader'> </div>}
//         </button>

//       </form>
//       <div className='footer'>Footer</div>
//     </div>
//   )
// }

// // ~~~~~*Plan for page*~~~~
// // <Nav Bar>
// // Header: Sign up! Create your Whiskey Business Account
// // Fields: First Name
// //          Last Name
// //          Username
// //          Password
// //          Confirm Password
// //          *Maybe box to show pw
// //   Submit Button
// //  <Footer >