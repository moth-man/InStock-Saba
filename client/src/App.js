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

  removeItem = (item) => {
    axios
      .delete(`${inventoryURL}/${item.id}`)
      .then(() => {
        axios
          .get(inventoryURL)
          .then(({ data }) => {
            this.setState({
              inventory: data
            });
            //window.location.reload(true)
          });
        //window.location.reload(true)
      })
    if (this.state.inventory.length !== 0) {
      setTimeout(() => {
        window.location.reload(true)
      }, 500)
    }
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
    let location = '';
    if (url === warehouseURL) {
      location = 'warehouses';
    } else {
      location = 'inventory';
    }
    axios.post(url, inputData).then(({ data }) => {
      this.setState({
        [location]: data
      });
    });
    console.log(this.state.warehouses, this.state.inventory);
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
                  removeItem={this.removeItem}
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
                  removeItem={this.removeItem}
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
