import React, { Component } from 'react';
import arrow from '../../assets/logos/Icon-arrow-right.svg';

class Warehouse extends Component {
  render() {
    const { ...data } = this.props;
    return (
      <div>
        <tr className="table__row">
          <div className="warehouseMainInfo">
            <td className="warehouseName">{data.warehouseName}</td>
            <td>
              {data.address}
              <img src={arrow} className="arrow-mobile" alt="link" />
            </td>
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
            <td className="categoryInfo">
            {data.categories}
            <img src={arrow} className="arrow-desktop" alt="link" />
            </td>
          </div>
        </tr>
      </div>
    );
  }
}

export default Warehouse;