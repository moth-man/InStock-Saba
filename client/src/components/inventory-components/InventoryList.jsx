import React, { Component } from 'react'
import InventoryItem from './InventoryItem'
import './Inventory.css'
// import Navbar from '../Navbar/navbar'

class InventoryList extends Component {
  render() {
    return (
      <div className="inventoryList__container">
        {/* <Navbar /> */}
        <h1 className="inventoryList__title">Inventory</h1>
        <InventoryItem />
      </div>
    )
  }
}


export default InventoryList