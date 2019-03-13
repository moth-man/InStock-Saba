import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import './Inventory.css';
import CreateNewInvModal from './CreateNewInvModal';

class InventoryList extends Component {

  singleInventory = onClick => {
    if(this.props.product == undefined || []) {
        return ('loading!'); 
      }
  }

  constructor(props) {
    super(props);
    this.state = {
      inventoryList: [],
      showModal: false
    };
  }

  iList = inventory => {
    if (inventory) {
      let list = [];
      inventory.map(i => {
        i.slice(1).map(iv => {
          list.push(iv);
        });
      });
      let iList = list.map(item => {
        if (item.status === true) {
          item.status = 'In-Stock';
        } else {
          item.status = 'Not In-Stock';
        }
        // <Link to={`/inventory/${item.id}`}>
          return <InventoryItem {...item}/>;
      //  </Link>
      });
      this.setState({
        inventoryList: iList
      });
      console.log(list);
    }
  };

  addInventory = () => {
    console.log('clicked');
    this.setState({
      showModal: !this.state.showModal
    });
  };

  componentDidMount() {
    const { inventory } = this.props;
    this.iList(inventory);
  }

  render() {
    console.log(this.props.inventory);
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
          <tbody>{this.state.inventoryList}</tbody>
        </table>
        {this.state.showModal && (
          <CreateNewInvModal formSubmit={this.props.formSubmit} />
        )}
      </div>
    );
  }
}

export default InventoryList;
