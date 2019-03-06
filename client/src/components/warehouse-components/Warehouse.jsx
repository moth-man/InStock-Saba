import React, { Component } from 'react';

class Warehouse extends Component {
  render() {
    const { ...data } = this.props;
    return (
      <div>
        <tr className="table__row">
          <div>
            <td className="warehouseName">{data.warehouseName}</td>
            <td>{data.address}</td>
          </div>
          <div>
            <td>{data.contact}</td>
            <td className="contact">{data.contactTitle}</td>
          </div>
          <div>
            <td>{data.contactNum}</td>
            <td>{data.contactEmail}</td>
          </div>
          <div>
            <td>{data.categories}</td>
          </div>
        </tr>
      </div>
    );
  }
}

export default Warehouse;
