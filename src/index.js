import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/a-escola" component={App} />
      <Route path="/para-quem" component={App} />
      <Route path="/metodologia" component={App} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
