import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Shop from './Shop/Shop.js'

class App extends Component {
  render() {
    return (
      <div>        
        <Shop />
      </div>
      );
    }
}

export default App;
