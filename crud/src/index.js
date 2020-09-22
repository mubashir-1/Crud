import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
//import Frame from './Frame';
//import Making from './Making';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Rout from './Rout';
ReactDOM.render(
  <div>
    <br /><br />
    <h1 style={{ textAlign: "center" }}>CRUD TABLE</h1>
    <Router>
      <Rout />
    </Router>

  </div>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
