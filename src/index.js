import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';
import AEscola from './pages/aEscola.js/AEscola';
import ParaQuem from './pages/paraQuem/ParaQuem';
import Metodologia from './pages/metodologia/Metodologia';

import Menu from '../src/components/menu/Menu';

import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div>
      <Menu />
      <Route exact path="/home" component={ App } />
      <Route exact path="/a-escola" component={ AEscola } />
      <Route exact path="/para-quem" component={ ParaQuem } />
      <Route exact path="/metodologia" component={ Metodologia } />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
