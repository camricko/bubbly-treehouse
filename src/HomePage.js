import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import bubbleData from './bubbleData'
import BubbleFamily from './BubbleFamily'
import ChangeBubbleLocation from './ChangeBubbleLocation'
import anArray from './BubbleFamily'

function HomePage() {
    return (
        <div>
            <header id='header' className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p id='caption'>
                    Welcome to the <code>src/App.js</code> HOLLOwood.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={() => console.log('current state value is', anArray)}>Click Me for BubbleClass State</button>
                <button onClick={() => ChangeBubbleLocation()}>Click Me for State</button>
                <input type='checkbox' onChange={() => console.log('checkbox changed!')}></input>
                <div style={{height: 700}}></div>
            </header>
            <body>
                <h1>Welcome to the homepage!</h1>
            </body>
        </div>
    )
}

export default HomePage;