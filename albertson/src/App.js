import React from 'react';
import './App.css';
import Main from './mainComp/Main.js';
import Login from './loginComp/Login.js';
import './loginComp/Login.css';
import ImagePlaylistPage from './ImagePlaylistPage';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import StoreLocation from './StoresLocation';
//import Verification from './verification';
import logo from './images/logo.svg';

function App() {
  return (
    
      <div>
        <h1>Hi, welcome back!</h1>
        <h4>Sign in with your company email</h4>
        <Login />
        <ImagePlaylistPage />

        <i className="fa fa-envelope-open"></i>
      </div>
  );
}

export default App;
