
import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Home from './Home';
//import Owner from './Owner';

export default class Rout extends Component {
    render() {
        return (
            <div>
                
                    <Switch>
                    <Route exact path="/Home" component={Home}/> 
                   
                    </Switch>
                
            </div>
        )
    }
}
