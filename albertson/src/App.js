import './App.css';
import Main from './mainComp/Main.js'
import Login from './loginComp/Login.js';
import './loginComp/Login.css';
import logo from './images/logo.svg';
import {Routes, Route} from "react-router-dom";
import React from 'react';
import Gallery from './uploadWidget/Gallery.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/main" element={ <Main /> }/>
        <Route path="/gallery" element={ <Gallery /> }/>
      </Routes>
    </div>
  );
}
export default App;
 