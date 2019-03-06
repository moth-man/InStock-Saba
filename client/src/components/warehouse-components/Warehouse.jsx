import React, { Component } from 'react';

class Warehouse extends Component {
  render() {
    const { ...data } = this.props;
    return (
      <div className='table__row'>
        <tr>
          <td className='warehouseName'>
            {data.warehouseName} <br/>
            {data.address}
          </td>
          <td className='contact'>
            {data.contact} <br/>
            {data.contactTitle}
          </td>
          <td>
            {data.contactNum} <br/>
            {data.contactEmail}
          </td>
          <td>{data.categories}</td>
        </tr>
      </div>
    );
  }
}

export default Warehouse;
