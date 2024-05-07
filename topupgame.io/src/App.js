/* eslint-disable no-unused-vars */
// set default
import './App.css';
import React, {useState, useEffect} from 'react'


// component gw
import TestingBaru from './component/testing';
import Headernav from './component/headernav';
import Main from './component/main';
import Footer from './component/footer';




function App() {
  return (
    <div className="App bg-gray-800 min-h-[100vh]">
      <Headernav />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
