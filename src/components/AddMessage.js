import React, { Component } from "react";
// import Prop-types from 'Prop-types';
https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
// Functional Component (or) Dumb Component

//Stateless functional components are useful for dumb/presentational components. 
//Stateless functional components don’t support state or lifecycle methods
//
 const AddMessage = (props) => {
     let input;
    const handleKeyPress = (input) => {
        if(input.key === 'Enter'){
            props.dispatch('Sangeetha',input.value);
            input.value = '';
        }
      
    }
    
    return(
        <input  id="new-message"
        onKeyPress = {(e) => handleKeyPress(e)}
        type="text"
        />
    );
}

export default AddMessage;