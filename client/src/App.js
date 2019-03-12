import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import WarehouseList from './components/warehouse-components/WarehouseList';
import InventoryList from './components/inventory-components/InventoryList';
import AllInventoryList from './components/inventory-components/AllInventoryList';
import ProductModal from './components/productmodal-components/ProductModal';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

const warehouseURL = `http://localhost:8080/warehouses`;
const inventoryURL = `http://localhost:8080/inventory`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      warehouses: [],
      inventory: []
    };
  }

  componentDidMount() {
    axios
      .get(warehouseURL)
      .then(({ data }) => {
        this.setState({
          warehouses: data
        });
      })
      .then(() => {
        axios.get(inventoryURL).then(({ data }) => {
          this.setState({
            inventory: data
          });
        });
      });
  }

  formSubmit = (url, inputData) => {
    axios.post(url, inputData).then(({ data }) => {
      this.setState({
        warehouses: data
      });
    });
  };

  render() {
    if (
      this.state.inventory.length === 0 ||
      !this.state.warehouses.length === 0
    ) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <WarehouseList
                  formSubmit={this.formSubmit}
                  warehouses={this.state.warehouses}
                />
              )}
            />
            <Route path="/inventory/:id" component={ProductModal} />
            <Route
              path="/inventory"
              render={routeProps => (
                <AllInventoryList
                  {...routeProps}
                  inventory={this.state.inventory}
                  formSubmit={this.formSubmit}
                />
              )}
            />
            <Route
              path="/warehouse/:id"
              render={routeProps => (
                <InventoryList
                  {...routeProps}
                  inventory={this.state.inventory}
                  warehouses={this.state.warehouses}
                />
              )}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
