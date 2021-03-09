import React, { Component } from "react";
import './App.css';
import Navi from './Navi'
import BulletinBoard from './BulletinBoard'
import HomePage from './HomePage'

function App() {
    return (
      <div className="App">
          <HomePage />
          <Navi />
          <BulletinBoard />
      </div>
    );
}

export default App;
