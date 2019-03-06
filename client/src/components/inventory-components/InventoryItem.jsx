import React, { Component } from 'react'
import './Inventory.css'

const InventoryItem = ({ name, description, ordered, location, quantity, status }) => {
  return (
    <div className="inventoryItem__container">
      <p className="item__title">ITEM</p>
      <button className="remove__item__button"></button>
      <h3 className="item__name">{name}</h3>
      <p className="item__description">{description}</p>
      <p className="item__lastOrdered">LAST ORDERED</p>
      <p className="lastOrdered__date">{ordered}</p>
      <p className="item__locationTitle">LOCATION</p>
      <p className="item__location">{location}</p>
      <p className="item__quantityTitle">QUANTITY</p>
      <p className="item__quantity">{quantity}</p>
      <p className="item__statusTitle">STATUS</p>
      <p className="item__status">{status}</p>
    </div>
  )
}

// class InventoryItem extends Component {
//   render() {
//     const { name, description, ordered, location, quantity, status } = this.props
//     return (
//       <div className="inventoryItem__container">
//         <p className="item__title">ITEM</p>
//         <h3 className="item__name">{name}</h3>
//         <p className="item__description">{description}</p>
//         <p className="item__lastOrdered">LAST ORDERED</p>
//         <p className="lastOrdered__date">{ordered}</p>
//         <p className="item__locationTitle">LOCATION</p>
//         <p className="item__location">{location}</p>
//         <p className="item__quantityTitle">QUANTITY</p>
//         <p className="item__quantity">{quantity}</p>
//         <p className="item__statusTitle">STATUS</p>
//         <p className="item__status">{status}</p>
//       </div>
//     )
//   }
// }

export default InventoryItem

