import React from 'react';
import firstpage from './firstpage.png';
import logo from './logo.svg';

const Login = () => {
    return (
      <div className="split-container">
        <div className="left-side">
        </div>
        <div className="right-side">
        <img src={logo} alt="Logo" />
      
          <div>
          <input className='Enter your email' placeholder='Email'></input>
          </div>
          <div>
          <input className='pass' placeholder='Password'></input>
          </div>
          <button className='loginBtn'>Login</button> 
        </div>
      </div>
    )
  }
  export default Login;


