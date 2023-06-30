import React from 'react';

const Login = () => {
    return (
      <div className="split-container">
        <div className="left-side">
          <h2>Sarah</h2>
        </div>
        <div className="right-side">
          <h1>Login </h1>
          <h4>Sign in with your company email</h4>
          <input className='email' placeholder='Email'></input>
          <input className='pass' placeholder='Password'></input>
          <button className='loginBtn'>Login</button> 
        </div>
      </div>
    )
  }
  
  export default Login;


