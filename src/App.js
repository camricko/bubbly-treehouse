import React, { Component } from "react";
import './App.css';
import BubbleFamily from './BubbleFamily'
import BulletinBoard from './BulletinBoard'
import HomePage from './HomePage'

function App() {
    return (
      <div className="App">
          <HomePage />
          <BubbleFamily />
          <BulletinBoard />
      </div>
    );
}

export default App;
