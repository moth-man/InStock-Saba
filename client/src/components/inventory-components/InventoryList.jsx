import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import CurrentWarehouse from '../warehouse-components/CurrentWarehouse';
import './Inventory.css';

class InventoryList extends Component {
  componentDidUpdate() {
    this.displaynone();
  }

  displaynone = () => {
    console.log(this.state.inventoryList);
    if (this.state.inventoryList.length > 0) {
      console.log('has stock');
      this.refs.nostock.style.display = 'none';
    } else {
      console.log('no stock');
      this.refs.header.style.display = 'none';
    }
  };

  render() {
    console.log(this.props.warehouses);

    const currentWarehouse = this.props.warehouses
      .filter(warehouse => {
      return this.props.match.params.id === warehouse.id;
    })
      .map(warehouse => {
        return <CurrentWarehouse {...warehouse}/>
      })

      const warehouseInventory = 
      this.props.inventory
      .filter(item => {
        return this.props.match.params.id ===
        item.warehouseId
      })
      .map(item => {
        item.status = true ? 'In-Stock' : 'Not In-Stock';
        return <InventoryItem {...item} removeItem={() => this.props.removeItem(item)} />
      })

    return (
      <div className="inventoryList__container">
        <div>{currentWarehouse}</div>
        <table className="inventoryList__table">
          <thead className="table__head">
            <tr className="table__head__row" ref="header">
              <th className="inventoryList__th">LAST ORDERED</th>
              <th className="inventoryList__th">LOCATION</th>
              <th className="inventoryList__th">QUANTITY</th>
              <th className="inventoryList__th">STATUS</th>
            </tr>
            <th ref="nostock" className="inventoryList__th">
              No Stock
            </th>
          </thead>
          <tbody>{warehouseInventory}</tbody>
        </table>
      </div>
    );
  }
}

export default InventoryList;
