import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Element from './extra1.js';
import Element1 from './extra2.js';




ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Element/>
    <Element1/>
  </React.StrictMode>,
  document.getElementById('root')
);
