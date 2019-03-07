import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import WarehouseList from './components/warehouse-components/WarehouseList';
import InventoryList from './components/inventory-components/InventoryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <InventoryList inventory={this.props} /> */}
        <WarehouseList />
      </div>
    );
  }
}

export default App;
