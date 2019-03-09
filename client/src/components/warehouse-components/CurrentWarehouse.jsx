import React, { Component } from 'react'
import arrow from '../../assets/logos/Icon-back-arrow.svg';
import './warehouse-styles/currentWarehouse.css';
import { Link } from 'react-router-dom'

class CurrentWarehouse extends Component {
  render() {
    const { ...data } = this.props
    return (
      <div className="currentWarehouse__container">
        <tr className="current__table__row">
          <div className="currentWarehouseMainInfo">
            <div className="currentWarehouse__title__container">
              <Link to={'/'}>
                <img src={arrow} className="current__arrow-mobile" alt="link" />
              </Link>
              <h1 className="currentWarehouseName">{data.warehouseName}</h1>
            </div>
            <p className="currentWarehouse__address__title">ADDRESS</p>
            <td>
              {data.address}
            </td>
          </div>
          <div>
            <p className="currentWarehouse__contact__title">CONTACT</p>
            <td>{data.contact}</td>
            <td className="contact">{data.contactTitle}</td>
          </div>
          <div>
            <td>{data.contactNum}</td>
            <td>{data.contactEmail}</td>
          </div>
          <div className="categoryInfo">

          </div>
        </tr>
      </div>
    )
  }
}
export default CurrentWarehouse