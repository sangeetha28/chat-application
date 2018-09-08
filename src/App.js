import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles.css";
// only for named exports
import  AddMessage  from './components/AddMessage';
import MessageList from "./components/MessageList";
import SideBar from "./components/Sidebar";

class App extends React.Component {
  render() {
    return (
      <div id="container"> 
      <SideBar />       
      <section id="main">
          <MessageList />
          <AddMessage />
        </section>
        </div>
    );
  }
}

export default hot(module)(App);
