import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shelf from './Components/Shelf/Shelf';
import Bin from './Components/Bin/Bin';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/shelf/:id" component={Shelf} />
        <Route path="/bin/:id" component={Bin} />
    </Switch>
)