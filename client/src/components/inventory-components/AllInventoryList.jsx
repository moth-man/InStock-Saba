import React, { Component } from 'react'
import InventoryItem from './InventoryItem'
import './Inventory.css'

class InventoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventoryList: []
    }
  }

  iList = (inventory) => {
    if (inventory) {
      let list = []
      inventory.map(i => {
        i.slice(1).map(iv => {
          list.push(iv)
        })
      })
      let iList = list.map(item => {
        if (item.status === true) {
          item.status = "In-Stock"
        } else {
          item.status = "Not In-Stock"
        }
        return (
          <InventoryItem {...item} />
        )
      })
      this.setState({
        inventoryList: iList
      })
      console.log(list)
    }

  }



  addInventory = () => {
    console.log("clicked")
  }

  componentDidMount() {
    const { inventory } = this.props
    this.iList(inventory)
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