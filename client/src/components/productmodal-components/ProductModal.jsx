import React from 'react';
import './productmodal.css';
// import axios from 'axios';

//dynamic with axios call : SPAN TAGS, the product name
//not dynamic: h4 tags with the product info


class ProductModal extends React.Component {
  render () {
    return (
      <section className="productDetails">
        <div className="productDetails__header">
          <h1 className="header__h1">Product Name</h1> 
          <button className="green-button">In Stock</button>
        </div>
      <div>
        <h4>ITEM DESCRIPTION</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>

      <section>
        <h4>ORDERED BY</h4>
          <span>order date</span>
        <h4>REFERENCE NUMBER</h4>
          <span>ref number</span>
        <h4>LAST ORDERED</h4>
          <span>a number</span>
        <h4>LOCATION</h4>
          <span>a city name</span>
      </section>
      
      <div>
      <h4>CATEGORIES</h4>
          <span>this is a summary of the items</span>
      </div>
      <button className="blue-button">EDIT</button>

      </section>

    )
  }
}

export default ProductModal;
