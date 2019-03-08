import React, { Component } from 'react'

class class WarehouseList extends Component {

  render() {
    return (
      <div></div>
    )
  }



let currentWarehouse = this.props.warehouses.find(warehouse => { 
  return warehouse.id === this.props.match.params.id
});

export default WarehouseList;