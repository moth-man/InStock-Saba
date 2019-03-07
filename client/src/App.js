import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import WarehouseList from './components/warehouse-components/WarehouseList';
import InventoryList from './components/inventory-components/InventoryList';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={WarehouseList} />
          <Route path="/inventory" render={(routeProps) => (<InventoryList {...routeProps}
            inventory={this.props}
          />)}
          />
        </Switch>
        {/* <InventoryList inventory={this.props} /> */}
      </div>
    );
  }
}

export default App;
