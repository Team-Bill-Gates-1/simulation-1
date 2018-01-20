import React, { Component } from 'react';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <nav className='nav'>
          <div>SHELFIE</div>
          <div className='link-wrap'>
            <div className='links'> Shelf A </div>
            <div className='links'> Shelf B </div>
            <div className='links'> Shelf C </div>
            <div className='links'> Shelf D </div>
          </div>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
