import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import PeopleContainer from './components/PeopleContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

// <PeopleContainer/>
export default App;
