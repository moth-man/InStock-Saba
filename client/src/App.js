import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import WarehouseList from './components/warehouse-components/WarehouseList';
import InventoryList from './components/inventory-components/InventoryList';
import ProductModal from './components/productmodal-components/ProductModal'
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';


const warehouseURL = `http://localhost:8080/warehouses`;
const inventoryURL = `http://localhost:8080/inventory`;

class App extends Component {
  constructor() {
    super()
    this.state = {
      warehouses: [],
      inventory: []
    }
  }

  componentDidMount() {
    axios
      .get(warehouseURL)
      .then(({ data }) => {
        this.setState({
          warehouses: data
        })
      })
      .then(() => {
        axios
          .get(inventoryURL)
          .then(({ data }) => {
            this.setState({
              inventory: data
            })
          })
      })
  }

  render() {
    if (this.state.inventory.length === 0 || !this.state.warehouses.length === 0) {
      console.log("@", this.state)
      return <h1>Loading</h1>
    } else {
      console.log("!", this.state)
      return (
        <div className="App">
          <Navbar />
          <ProductModal />
          <Switch>
            <Route path="/" exact component={WarehouseList} />
            <Route path="/inventory" render={(routeProps) => (<InventoryList {...routeProps}
              inventory={this.state.inventory}
              warehouses={this.state.warehouses}
            />)}
            />
            <Route path="/warehouse/:id" render={(routeProps) => (<InventoryList {...routeProps}
              inventory={this.state.inventory}
              warehouses={this.state.warehouses}
            />)}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;



// class App extends Component {
  //   render() {
  //     return (
  //       <div className='App'>
  //         <Navbar />
  //         <ProductModal />
  //         <Switch>
  //           <Route path="/" exact component={WarehouseList} />
  //           <Route path="/inventory" render={(routeProps) => (<InventoryList {...routeProps}
  //           />)}
  //           />
  //           <Route path="/warehouse/:id" render={(routeProps) => (<InventoryList {...routeProps}
  