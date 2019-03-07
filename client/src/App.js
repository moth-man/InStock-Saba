import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import WarehouseList from './components/warehouse-components/WarehouseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <WarehouseList />
      </div>
    );
  }
}

export default App;
