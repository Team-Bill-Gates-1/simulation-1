import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
            <div>
                <nav className='nav'>
                <img src={logo} alt="logo" id="logo"/><div>SHELFIE</div>
                <div className='link-wrap'>
                    <Link to="/shelf/A"><div className='links'> Shelf A</div> </Link>
                    <Link to="/shelf/B"><div className='links'> Shelf B</div> </Link>                    <Link to="/shelf/C"><div className='links'> Shelf C</div> </Link>
                    <Link to="/shelf/D"><div className='links'> Shelf D</div> </Link>
                </div>
            </nav>
          </div>
        )
    }
}