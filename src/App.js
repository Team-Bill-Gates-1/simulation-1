import React, { Component } from 'react';
import Routes from './routes';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        {Routes}
      </div>
    );
  }
}

export default App;
