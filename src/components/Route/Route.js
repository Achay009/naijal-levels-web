import React from 'react';
import {Switch,Route,Redirect } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import AddLevels from '../../containers/AddLevels/AddLevels';
import AddCompanies from '../../containers/AddCompanies/AddCompanies';
import AddCompensations from '../../containers/AddCompensations/AddCompensations'

const Routes = (props) => (
    <Switch>
        <Route exact path ='/'>
            <Home/>
        </Route>
        <Route exact path ='/home'>
            <Home/>
        </Route>
        <Route exact path='/add_levels'>
            <AddLevels/>
        </Route>
        <Route exact path='/add_compensations'>
            <AddCompensations/>
        </Route>
        <Route exact path='/add_companies'>
            <AddCompanies/>
        </Route>
        <Route >
            <Redirect to="/"/>
        </Route>
    </Switch>

);

export default Routes;