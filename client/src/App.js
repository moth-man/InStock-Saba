import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InventoryList from './components/inventory-components/InventoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InventoryList />
      </div>
    );
  }
}

export default App;
