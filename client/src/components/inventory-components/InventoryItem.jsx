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
      pop = <Popup />
    } else {
      pop = null
    }
    return (
      // <div className="inventoryItem__container">
      //   <p className="item__title">ITEM</p>
      //   <button className="remove__item__button" onClick={() => this.togglePopUp()}></button>
      //   {pop}
      //   <h3 className="item__name">{name}</h3>
      //   <p className="item__description">{description}</p>
      //   <p className="item__lastOrdered">LAST ORDERED</p>
      //   <p className="lastOrdered__date">{ordered}</p>
      //   <p className="item__locationTitle">LOCATION</p>
      //   <p className="item__location">{location}</p>
      //   <p className="item__quantityTitle">QUANTITY</p>
      //   <p className="item__quantity">{quantity}</p>
      //   <p className="item__statusTitle">STATUS</p>
      //   <p className="item__status">{status}</p>
      // </div>

      <div className="inventoryItem__container">
        {/* <button className="remove__item__button" onClick={() => this.togglePopUp()}></button> */}
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
      <div className="popup__container"><p className="popup__text">Remove</p></div>
    )
  }
}



export default InventoryItem

