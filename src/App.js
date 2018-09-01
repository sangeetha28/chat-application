import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles.css";
// only for named exports
import  AddMessage  from './components/AddMessage';

class App extends React.Component {
  render() {
    return (
      <div id="container">
      <div id="sidebar">Users </div>
      <section id="main">
          <div id="messages-list">Messages list</div>
          <AddMessage />
        </section>
        </div>
    );
  }
}

export default hot(module)(App);
