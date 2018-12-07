import React, { Component } from 'react';
import Home from '../src/pages/home/home'
import Menu from '../src/components/menu/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
