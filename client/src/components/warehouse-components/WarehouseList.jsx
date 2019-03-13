import React, { Component } from 'react';
import Warehouse from './Warehouse';
import './warehouse-styles/warehouse.css';
import axios from 'axios';
const URL = `http://localhost:8080/warehouses`;

class WarehouseList extends Component {
  state = {
    warehouses: []
  };

  componentDidMount() {
    axios.get(URL).then(res => {
      this.setState({
        warehouses: res.data
      });
    });
  }

  render() {
    const warehouseList = this.state.warehouses.map((warehouse, i) => {
      return <Warehouse {...warehouse} key={i} />;
    });

    return (
      <div className="WarehouseList">
        <div className="WarehouseList__header">
          <h1 className="header__h1">Locations</h1>
          <input className="header__search" type="text" placeholder="Search" />
        </div>

        <table className="WarehouseList__table">
          <thead className="thead">
            <tr className="table__header">
              <th>WAREHOUSE</th>
              <th>CONTACT</th>
              <th>CONTACT INFORMATION</th>
              <th>CATEGORIES</th>
            </tr>
          </thead>
          <tbody>{warehouseList}</tbody>
        </table>
      </div>
    );
  }
}

export default WarehouseList;
