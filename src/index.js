import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './HomePage'
import BulletinBoard from './BulletinBoard'
import Navi from './Navi'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// logic:
// save each webpage as a separate component
// have these webpages conditionally render under App.js
// another component, Bubbles, will display bubbles on the screen that will, onHover, make stuff true or false
// Bubbles should be called in App.js and change variables in App.js

