import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

function HomePage() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
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
                <button onClick={() => console.log('clicked!')}>Click Me</button>
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