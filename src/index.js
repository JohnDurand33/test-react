import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root')); // Need to append to actually render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);