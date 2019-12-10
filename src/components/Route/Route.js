import React from 'react';
import {Switch,Route } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import AddLevels from '../../containers/AddLevels/AddLevels';
import AddCompanies from '../../containers/AddCompanies/AddCompanies';

const Routes = (props) => (
    <Switch>
        <Route exact path ='/'>
            <Home/> 
        </Route>
        <Route exact path='/add_levels'>
            <AddLevels/>
        </Route>
        <Route exact path='/add_companies'>
            <AddCompanies/>
        </Route>
    </Switch>

);

export default Routes;