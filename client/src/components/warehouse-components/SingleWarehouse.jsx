import React, { Component } from 'react';

class SingleWarehouse extends Component {
  // state = {
  //   currentWarehouse: {}
  // }

  // componentDidMount() {
  //   const currentWarehouse = this.props.warehouses.find(warehouse => { 
  //     return warehouse.id === this.props.match.params.id
  //   });
  //   this.setState({
  //     currentWarehouse
  //   })
  // }

  render() {
    if (this.state.currentWarehouse === {}) return 'Loading...';
    // const { name, description, ordered, location, quantity, status } = currentWarehouse;

    return (

      <div>
        {/* <h1>{this.state.currentWarehouse.warehouseName}</h1> */}
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
          {/* <tbody>
          <tr className="inventoryItem__tableRow">
          <td className="item__title">ITEM</td>
          <td className="item__name">{name}</td>
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
          </tbody> */}
        </table>
      </div>
    )
  }
}



  export default SingleWarehouse;

