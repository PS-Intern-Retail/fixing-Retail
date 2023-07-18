import React from 'react';
import './App.css';
import Main from './mainComp/Main.js';
import Login from './loginComp/Login.js';
import './loginComp/Login.css';
import logo from './images/logo.svg';
import StoresLocation from './storeLocationComp/StoresLocation'
import Verification from './storeLocationComp/verification';
import {Routes, Route} from "react-router-dom";
import ViewPlaylist from './ViewPlaylist';

function App() {
  return (
    <div>
    <ViewPlaylist/>
    </div>
  );
}

export default App;
