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
      console.log("this exists")
      var list = inventory.inventory.map(i => {
        if (i.status === false) i.status = "Not In-Stock"
        else { i.status = "In-Stock" }
        return (
          <InventoryItem name={i.name} description={i.description} ordered={i.ordered.toLocaleDateString("en-US")} location={i.location} quantity={i.quantity} status={i.status} />
        )
      })
      this.setState({
        inventoryList: list,
      }, () => list = this.state.inventoryList)
      console.log("list: ", list)
      console.log(this.state)

    }

  }

  componentDidMount() {
    const { inventory } = this.props
    setTimeout(
      () => this.iList(inventory),
      1000
    )
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
        {/* <InventoryItem name={this.props.inventory.inventory[2].name} /> */}
        {this.state.inventoryList}
      </div>
    )
  }
}


export default InventoryList