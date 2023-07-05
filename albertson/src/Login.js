import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [invalid, setInvalid] = useState(false)

  function validateLogin(){
    if(user.trim().length === 0 && pass.trim().length === 0){
      //alert("Invalid Username or Password")
      setInvalid(true)

      setTimeout(() => {
        setInvalid(false)
      }, 4000)
    }
  }

  const handleUserChange = event => {
    setUser(event.target.value)
  }
  const handlePassChange = event => {
    setUser(event.target.value)
  }

    return (
      <div className="split-container">
        <div className="left-side">
          <h2>Sarah</h2>
        </div>
        <div className="right-side">
          <h1>Login </h1>
          <h4>Sign in with your company email</h4>
          <input onChange={handleUserChange} className='email' placeholder='Email'></input>
          <input onChange={handlePassChange} className='pass' placeholder='Password'></input>
          <button className='forgetPass'>Forget Password?</button>
          {invalid && 
            <div>
              <h5>Incorrect username or password</h5>
            </div>}
          <button onClick={validateLogin} className='loginBtn'>Login</button> 
        </div>
      </div>
    )
  }
  
  export default Login;


