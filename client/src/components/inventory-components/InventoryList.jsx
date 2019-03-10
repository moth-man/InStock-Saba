import React, { Component } from 'react'
import axios from 'axios'
import InventoryItem from './InventoryItem'
import './Inventory.css'

class InventoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventoryList: [],
      data: []
    }
  }

  iList = (inventory) => {
    if (inventory) {
      const warehouseInventory = inventory.find((iv, i) => {
        return this.props.match.params.id === iv[0].id
      })
      var wh = warehouseInventory.slice(1)
      var list = wh.map(i => {
        if (i.status === false) i.status = "Not In-Stock"
        else { i.status = "In-Stock" }
        return (
          <InventoryItem {...i} />
        )
      })
      this.setState({
        inventoryList: list,
      }, () => list = this.state.inventoryList)
      console.log("list: ", list)
      console.log(this.state)
    }
  }

  addInventory = () => {
    console.log("clicked")
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios
      .get("http://localhost:8080/inventory")
      .then(({ data }) => {
        this.setState({
          data: data
        }, () => this.iList(data))
      })
  }

  render() {
    return (

      <div className="inventoryList__container">
        <h1 className="inventoryList__title">Inventory</h1>
        <div className="searchBar__container">
          <form className="searchBar">
            <input className="searchBar__input" type="text" placeholder="Search"></input>
          </form>
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