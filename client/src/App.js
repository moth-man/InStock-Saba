import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import WarehouseList from './components/warehouse-components/WarehouseList';
import InventoryList from './components/inventory-components/InventoryList';
import ProductModal from './components/productmodal-components/ProductModal'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <ProductModal /> */}
        <Switch>
          <Route path="/" exact component={WarehouseList} />
          <Route path="/inventory" render={(routeProps) => (<InventoryList {...routeProps}
          />)}
          />
          <Route path="/warehouse/:id" render={(routeProps) => (<InventoryList {...routeProps}

            id={this.props.match}
          />)}
          />
        </Switch>
        {/* <InventoryList inventory={this.props} /> */}
      </div>
    );
  }
}

export default App;
