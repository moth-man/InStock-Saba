import React, { Component } from "react";
import arrow from "../../assets/logos/Icon-back-arrow.svg";
import "./warehouse-styles/currentWarehouse.css";
import { Link } from "react-router-dom";

class CurrentWarehouse extends Component {
  render() {
    const { ...data } = this.props;
    return (
      <div className='currentWarehouse__container'>
        <tr className='current__table__row'>
          <div className='currentWarehouseMainInfo'>
            <div className='currentWarehouse__title__container'>
              <Link to={"/"}>
                <img src={arrow} className='current__arrow-mobile' alt='link' />
              </Link>
              <h1 className='currentWarehouseName'>{data.warehouseName}</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='for-flex'>
              <p className='currentWarehouse__address__title'>ADDRESS</p>
              <div>{data.address}</div>
            </div>
            <div className='for-flex'>
              <div>
                <p className='currentWarehouse__contact__title'>CONTACT</p>
                <div>{data.contact}</div>
                <div className='contact'>{data.contactTitle}</div>
              </div>
              <div className='notgrey'>
                <div>{data.contactNum}</div>
                <div>{data.contactEmail}</div>
              </div>
            </div>
          </div>
        </tr>
      </div>
    );
  }
}
export default CurrentWarehouse;
