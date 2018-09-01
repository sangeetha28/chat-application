import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// It is the function that tells React what to Render and where to Render 
// We are rendering a comp called APP, it is being rendered at the DOM element at the ID root
ReactDOM.render(
    <App />,
 document.getElementById("root")
);