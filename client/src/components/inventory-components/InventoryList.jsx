import React, { Component } from 'react'
import axios from 'axios'
import InventoryItem from './InventoryItem'
import './Inventory.css'

class InventoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventoryList: [],
      data: [],
      warehouse: {}
    }
  }

  iList = (inventory) => {
    if (inventory) {
      const warehouseInventory = inventory.find((iv, i) => {
        return this.props.match.params.id === iv[0].id
      })
      let wh = warehouseInventory.slice(1)
      let list = wh.map(i => {
        if (i.status === false) i.status = "Not In-Stock"
        else { i.status = "In-Stock" }
        return (
          <InventoryItem {...i} />
        )
      })
      this.setState({
        inventoryList: list,
      }, () => list = this.state.inventoryList)
    }
  }

  // addInventory = () => {
  //   console.log("clicked")
  // }

  componentDidMount() {
    axios
      .get("http://localhost:8080/inventory")
      .then(({ data }) => {
        let currentWarehouse = this.props.warehouses.find(warehouse => { 
              return warehouse.id === this.props.match.params.id
            });
            this.setState({
          data,
          warehouse: currentWarehouse
        }, () => this.iList(data)
            )
      })
  }

  render() {
    if (this.state.warehouse === {} || undefined) return 'Loading...';

    console.log(this.state.warehouse)
    return (
      <div className="inventoryList__container">
        {/* <h1 className="inventoryList__title">{this.state.warehouse.warehouseName}</h1> */}
        <div className="searchBar__container">
          {/* <form className="searchBar">
            <input className="searchBar__input" type="text" placeholder="Search"></input>
          </form> */}
        </div>
        <table className="inventoryList__table">
          <thead className="table__head">
            <tr className="table__head__row">
              <th className="inventoryList__th item">ITEM</th>
              <th className="inventoryList__th">LAST ORDERED</th>
              <th className="inventoryList__th">LOCATION</th>
              <th className="inventoryList__th">QUANTITY</th>
              <th className="inventoryList__th">STATUS</th>
            </tr>
          </thead>
          <tbody>{this.state.inventoryList}</tbody>
        </table>
        <button className="add__inventoryItem__button" onClick={() => this.addInventory()}><div className="add__inventoryItem__button__container"></div></button>
      </div>
    )
  }
}


export default InventoryList