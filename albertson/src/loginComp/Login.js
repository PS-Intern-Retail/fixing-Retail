import React from 'react';
import { useState } from 'react';
import { userPassData } from './User_Pass'
import firstpage from './firstpage.png';
import logo from '../images/logo.svg';

const Login = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [invalid, setInvalid] = useState(false)
  let valid = false

  function incorrectLogin(){
    if(!valid){
      setInvalid(true)
  
      setTimeout(() => {
        setInvalid(false)
      }, 3000)
    }
  }

  function validateLogin(){
    userPassData.map((data, key) => {
      if(user.trim() === data.username && pass.trim() === data.password){
        alert("Success!")
        valid = true
      }
    })

    incorrectLogin()
  }

  const handleUserChange = event => {
    setUser(event.target.value)
  }
  const handlePassChange = event => {
    setPass(event.target.value)
  }

    return (
      <div className="split-container">
        <div className="left-side">
        </div>
        <div className="right-side">
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
  //       <img src={logo} alt="Logo" />
      
  //         <div>
  //         <input className='Enter your email' placeholder='Email'></input>
  //         </div>
  //         <div>
  //         <input className='pass' placeholder='Password'></input>
  //         </div>
  //         <button className='loginBtn'>Login</button> 
  //       </div>
  //     </div>
  //   )
  // }
  // export default Login;


