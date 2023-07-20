import React from 'react';
import './App.css';
import Main from './mainComp/Main.js';
import Login from './loginComp/Login.js';
import './loginComp/Login.css';
import logo from './images/logo.svg';
import StoresLocation from './storeLocationComp/StoresLocation'
import Verification from './storeLocationComp/verification';
import { Routes, Route } from "react-router-dom";
import ViewPlaylist from './ViewPlaylist';
import Schedule from './Schedule';
import CreatePlaylist from './createPlaylist';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sl" element={<StoresLocation />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/viewplaylist" element={<ViewPlaylist />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/createplaylist" element={<CreatePlaylist />} /> 
      </Routes>
    </div>
  );
}

export default App;
