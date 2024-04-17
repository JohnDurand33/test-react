import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';      //only one default export syntax per file (i.e. import App (usually best practive is App) from './App', instead you need to put it in curly braces)

/* eslint-disable */
// prettier-ignore
const options = {
    first: "hello, world",
    second: true,
    internationalizing: true
}

export { options }

const root = ReactDOM.createRoot(document.getElementById("root")); // Need to append to actually render
root.render(
    <React.StrictMode>
    <App />
	</React.StrictMode>
);