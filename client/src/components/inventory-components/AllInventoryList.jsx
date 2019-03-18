import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import CreateNewInvModal from './CreateNewInvModal';
import './Inventory.css';

class InventoryList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  addInventory = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const inventoryList = this.props.inventory.map(item => {
      item.status = true ? 'In-Stock' : 'Not In-Stock';
      return (
        <InventoryItem
          {...item}
          removeItem={() => this.props.removeItem(item)}
        />
      );
    });

    return (
      <div className="inventoryList__container">
        <button
          className="add__inventoryItem__button add__inventoryItem__button__container"
          onClick={() => this.addInventory()}
        />
        <section className="inventory-flex">
          <h1 className="inventoryList__title">Inventory</h1>
          <div className="searchBar__container">
            <form className="searchBar">
              <input
                className="searchBar__input"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </section>
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
          <tbody>{inventoryList}</tbody>
        </table>
        {this.state.showModal && (
          <CreateNewInvModal formSubmit={this.props.formSubmit} />
        )}
      </div>
    );
  }
}

export default InventoryList;
