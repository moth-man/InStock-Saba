import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/logos/Icon-arrow-right.svg";

class Warehouse extends Component {
  render() {
    const { ...data } = this.props;
    const link = `/warehouse/${data.id}`;
    return (
      <div className='flex-row'>
        <tr className='table__row'>
          <div className='warehouseMainInfo'>
            <td className='warehouseName'>{data.warehouseName}</td>
            <td>{data.address}</td>
          </div>
          <div>
            <td>{data.contact}</td>
            <td className='contact'>{data.contactTitle}</td>
          </div>
          <div>
            <td>{data.contactNum}</td>
            <td>{data.contactEmail}</td>
          </div>
          <div className='categoryInfo'>
            <td className='category__td'>{data.categories}</td>
          </div>
        </tr>
        <Link to={link} className='arrow-mobile'>
          <img src={arrow} alt='A link' />
        </Link>
      </div>
    );
  }
}

export default Warehouse;
