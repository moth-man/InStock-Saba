import React, { Component } from 'react';

class Warehouse extends Component {
  render() {
    const { ...data } = this.props;
    return (
      <div>
        <tr>
          <td className="warehouseName">
            {data.warehouseName}
            {data.address}
          </td>
          <td>
            {data.contact}
            {data.Contacttitle}
          </td>
          <td>
            {data.contactNum}
            {data.contactEmail}
          </td>
          <td>{data.categories}</td>
        </tr>
      </div>
    );
  }
}

export default Warehouse;
