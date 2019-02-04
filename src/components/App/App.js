import React, { Component } from 'react';
import './App.css';
import Project from './../Project/Project';
import Adminpage from './../Adminpage/Adminpage';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/adminpage">Add Projects</Link>
            <Link to="/">Projects</Link>
            <h1>Portfolio</h1>
            <Route exact path="/adminpage" component={Adminpage} />
            <Route exact path="/" component={Project} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
