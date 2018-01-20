import React, { Component } from 'react';
import Routes from './routes';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <nav className='nav'>
          <img src={logo} alt="logo" id="logo"/><div>SHELFIE</div>
          <div className='link-wrap'>
          <a href="#"><div className='links'> Shelf A</div> </a>
          <a href="#"> <div className='links'> Shelf B </div></a>
          <a href="#"><div className='links'> Shelf C </div></a>
          <a href="#"> <div className='links'> Shelf D </div></a>
          </div>
        </nav>
        {Routes}
      </div>
    );
  }
}

export default App;
