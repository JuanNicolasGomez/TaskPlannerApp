import React, { Component } from 'react';
import logo from './logo3.png';
import './App.css';
import {Login} from './component/Login.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Task Planner</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <Login/>
        </header>
      </div>
    );
  }
}

export default App;
