import React, { Component } from 'react';
import './App.css';
import InventoryList from './components/inventory-components/InventoryList'
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <InventoryList inventory={this.props} />
      </div>
    );
  }
}

export default App;
