import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import chat from './reducers';
//https://medium.com/@itsdavidthai/redux-an-explanation-for-beginners-957f268e7382
// It is the function that tells React what to Render and where to Render 
// We are rendering a comp called APP, it is being rendered at the DOM element at the ID root
//Provider, which makes the store available to all the components of the app, without explicitly passing it down.
// This is the Provider Component, which listens to the Store... if any changes to the 
// Store it will render the application again
// Store stores all your state
//state can only be changed by a pure function aka a REDUCER so to create this connection we will pass in our reducer to createStore() like so
//The action that we pass into a reducer will determine how the state will be changed depending on the type.
const store = createStore(chat);
/* ACTION  - a object with the property type */
/* REDUCER - a function */
/* mapDispatchToProps is used to bind action in your component. */ 
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
   document.getElementById("root")
);
