import React, { Component } from 'react'
import './Inventory.css'
import {Link } from 'react-router-dom'

class InventoryItem extends Component {
  constructor() {
    super()
    this.state = {
      popup: false
    }
  }

  togglePopUp = () => {
    const popup = document.querySelector("popup")
    this.setState({
      popup: !this.state.popup
    })
  }

  render() {
    const { name, description, ordered, location, quantity, status, id } = this.props
    const isVisible = this.state.popup
    let pop

    if (isVisible) {
      pop = <Popup removeItem={this.props.removeItem} />
    } else {
      pop = null
    }
    return (
      <div className="inventoryItem__container">
        <tr className="inventoryItem__tableRow">
          <td className="item__title">ITEM</td>
          <button className="remove__item__button" onClick={() => this.togglePopUp()}></button>
          {pop}
          <Link className="link-decoration"to={`/inventory/${id}`} >
            <td className="item__name">{name}</td>
          </Link>
          <td className="item__description">{description}</td>
          <td className="item__lastOrdered">LAST ORDERED</td>
          <td className="lastOrdered__date">{ordered}</td>
          <td className="item__locationTitle">LOCATION</td>
          <td className="item__location">{location}</td>
          <td className="item__quantityTitle">QUANTITY</td>
          <td className="item__quantity">{quantity}</td>
          <td className="item__statusTitle">STATUS</td>
          <td className="item__status">{status}</td>
        </tr>
      </div>
    )
  }
}

class Popup extends Component {
  render() {
    return (
      <div className="popup__container">
        <p className="popup__text" onClick={() => this.props.removeItem()}>Remove</p>
      </div>
    )
  }
}

export default InventoryItem

