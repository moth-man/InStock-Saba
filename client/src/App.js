import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import WarehouseList from "./components/warehouse-components/WarehouseList";
import InventoryList from "./components/inventory-components/InventoryList";
import Warehouse from "./components/WarehouseModal/warehouseModal";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Route path='/' exact component={WarehouseList} />
          <Route
            path='/inventory'
            render={routeProps => (
              <InventoryList {...routeProps} inventory={this.props} />
            )}
=======
          <Route path="/" exact component={WarehouseList} />
          <Route path="/inventory" render={(routeProps) => (<InventoryList {...routeProps}

          />)}
          />
          <Route path="/warehouse/:id" render={(routeProps) => (<InventoryList {...routeProps}

            id={this.props.match}
          />)}
>>>>>>> 47e43ffb21c73ca5b739fb74961db441833c674c
          />
        </Switch>
        <Warehouse />
        {/* <InventoryList inventory={this.props} /> */}
      </div>
    );
  }
}

export default App;
