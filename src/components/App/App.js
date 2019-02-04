import React, { Component } from 'react';
import './App.css';
import Project from './../Project/Project';
import Adminpage from './../Adminpage/Adminpage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Portfolio</h1>
        <Project />
        <Adminpage />
      </div>
    );
  }
}

export default App;
