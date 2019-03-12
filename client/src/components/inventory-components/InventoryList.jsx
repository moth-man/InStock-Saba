import React, { Component } from "react";
import axios from "axios";
import InventoryItem from "./InventoryItem";
import CurrentWarehouse from "../warehouse-components/CurrentWarehouse";
import "./Inventory.css";

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWarehouse: [],
      inventoryList: []
    };
  }

  iList = inventory => {
    if (inventory) {
      const warehouseInventory = inventory.find(iv => {
        return this.props.match.params.id === iv[0].id;
      });
      if (!warehouseInventory) {
        return;
      }
      var wh = warehouseInventory.slice(1);
      var list = wh.map(i => {
        if (i.status === false) i.status = "Not In-Stock";
        else {
          i.status = "In-Stock";
        }
        return <InventoryItem {...i} />;
      });
      this.setState({
        inventoryList: list
      });
    }
  };

  iWarehouse = warehouses => {
    if (warehouses) {
      const currentWarehouse = warehouses.find(warehouse => {
        return this.props.match.params.id === warehouse.id;
      });
      this.setState(
        {
          currentWarehouse: <CurrentWarehouse {...currentWarehouse} />
        },
        () => console.log(this.state.currentWarehouse)
      );
    }
  };

  addInventory = () => {
    console.log("clicked");
  };

  componentDidMount() {
    const { inventory, warehouses } = this.props;
    this.iList(inventory);
    this.iWarehouse(warehouses);
  }

  componentDidUpdate() {
    this.displaynone();
  }

  displaynone = () => {
    console.log(this.state.inventoryList);
    if (this.state.inventoryList.length > 0) {
      console.log("has stock");
      this.refs.nostock.style.display = "none";
    } else {
      console.log("no stock");
      this.refs.header.style.display = "none";
    }
  };

  render() {
    // console.log(this.state.currentWarehouse.warehouseName)
    return (
      <div className='inventoryList__container'>
        <div>{this.state.currentWarehouse}</div>
        <table className='inventoryList__table'>
          <thead className='table__head'>
            <tr className='table__head__row' ref='header'>
              <th className='inventoryList__th'>LAST ORDERED</th>
              <th className='inventoryList__th'>LOCATION</th>
              <th className='inventoryList__th'>QUANTITY</th>
              <th className='inventoryList__th'>STATUS</th>
            </tr>
            <th ref='nostock' className='inventoryList__th'>
              No Stock
            </th>
          </thead>
          <tbody>{this.state.inventoryList}</tbody>
        </table>
      </div>
    );
  }
}

export default InventoryList;