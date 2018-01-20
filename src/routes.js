import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shelf from './Components/BinList/Shelf';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/shelf/:id" component={Shelf} />
    </Switch>

)