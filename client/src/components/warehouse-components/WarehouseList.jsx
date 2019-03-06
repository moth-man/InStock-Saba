import React, { Component } from 'react';
import Warehouse from './Warehouse';
import './styles/warehouse.css';

const MOCK_DATA = [
  {
    warehouseName: 'Warehouse of Wonders 1',
    address: '102 W. 1st Ave, Vancouver, BC',
    contact: 'Luca Emmett',
    contactTitle: 'Manager',
    contactNum: '+1 778 248 9383',
    contactEmail: 'luca@instock.com',
    categories: 'Industrial, Electronics'
  },
  {
    warehouseName: 'Warehouse of Wonders 1',
    address: '102 W. 1st Ave, Vancouver, BC',
    contact: 'Luca Emmett',
    contactTitle: 'Manager',
    contactNum: '+1 778 248 9383',
    contactEmail: 'luca@instock.com',
    categories: 'Industrial, Electronics'
  },
  {
    warehouseName: 'Warehouse of Wonders 1',
    address: '102 W. 1st Ave, Vancouver, BC',
    contact: 'Luca Emmett',
    contactTitle: 'Manager',
    contactNum: '+1 778 248 9383',
    contactEmail: 'luca@instock.com',
    categories: 'Industrial, Electronics'
  },
  {
    warehouseName: 'Warehouse of Wonders 1',
    address: '102 W. 1st Ave, Vancouver, BC',
    contact: 'Luca Emmett',
    contactTitle: 'Manager',
    contactNum: '+1 778 248 9383',
    contactEmail: 'luca@instock.com',
    categories: 'Industrial, Electronics'
  }
];

class WarehouseList extends Component {
  render() {
    const warehouseList = MOCK_DATA.map((warehouse, i) => {
      return <Warehouse {...warehouse} key={i} />;
    });

    return (
      <div className="WarehouseList">
        <div className="WarehouseList__header">
          <h1 className="header__h1">Locations</h1>
          <input className="header__search" type="text" placeholder="Search" />
        </div>

        <table className="WarehouseList__table">
          <thead>
            <tr className="table__header">
              <th>Warehouse</th>
              <th>Contact</th>
              <th>Contact Information</th>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>{warehouseList}</tbody>
        </table>
      </div>
    );
  }
}

export default WarehouseList;
