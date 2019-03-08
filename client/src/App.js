import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import WarehouseList from './components/warehouse-components/WarehouseList';
import InventoryList from './components/inventory-components/InventoryList';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';

const warehouseURL = `http://localhost:8080/warehouses`;
const inventoryURL = `http://localhost:8080/inventory`;

class App extends Component {
  state = {
    warehouses: [],
    inventory: []
  };

  componentDidMount() {
    axios.get(warehouseURL).then(res => {
      this.setState({
        warehouses: res.data
      });
    })
    .then(()=> {
      axios.get(inventoryURL).then(res=>{
        this.setState({
          inventory: res.data
        });
      });
    });
  }

  render() {
    console.log(this.state.warehouses, this.state.inventory)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => 
          (<WarehouseList warehouses={this.state.warehouses}/> )} />
          <Route path="/inventory" render={(routeProps) => (<InventoryList {...routeProps}/>
          )}
          />
          <Route path="/warehouse/:id" render={(routeProps) => (<InventoryList {...routeProps}
          id={this.props.match}
          />)}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
