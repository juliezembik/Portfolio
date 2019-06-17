import React, { Component } from 'react';
import './App.css';
import Project from './../Project/Project';
import Adminfront from './../Adminpage/Adminfront';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HeaderItem from './../Header/HeaderItem';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <HeaderItem />
            <Link to="/adminfront">Add Projects</Link>
            <Link to="/">Projects</Link>
            <h1>Portfolio</h1>
            <Route exact path="/adminfront" component={Adminfront} />
            <Route exact path="/" component={Project} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
