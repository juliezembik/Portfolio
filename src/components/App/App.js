import React, { Component } from 'react';
import './App.css';
import Project from './../Project/Project';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Portfolio</h1>
        <Project />
      </div>
    );
  }
}

export default App;
