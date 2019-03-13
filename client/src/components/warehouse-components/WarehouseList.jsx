import React, { Component } from 'react';
import Warehouse from './Warehouse';
import './warehouse-styles/warehouse.css';
import WarehouseModal from '../WarehouseModal1/warehouseModal';

class WarehouseList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  modalToggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const warehouseList = this.props.warehouses.map((warehouse, i) => {
      return <Warehouse {...warehouse} key={i} />;
    });
    return (
      <div className="WarehouseList">
        <div className="WarehouseList__header">
          <h1 className="header__h1">Locations</h1>
          <input className="header__search" type="text" placeholder="Search" />
        </div>

        {this.state.showModal && (
          <WarehouseModal formSubmit={ this.props.formSubmit} />
        )}

        <table className="WarehouseList__table">
          <thead className="thead">
            <tr className="table__header">
              <th>WAREHOUSE</th>
              <th>CONTACT</th>
              <th>CONTACT INFORMATION</th>
              <th>CATEGORIES</th>
            </tr>
          </thead>
          <tbody>{warehouseList}</tbody>
        </table>
        <button
          ref="button"
          className="add__inventoryItem__button__container"
          onClick={() => this.modalToggle()}
          type="button"
        />
      </div>
    );
  }
}

export default WarehouseList;
