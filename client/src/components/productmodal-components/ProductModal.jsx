import React from 'react';
import './productmodal.css';
// import axios from 'axios';
import backButton from '../../assets/icons/SVG/Icon-back-arrow.svg'

//dynamic with axios call : SPAN TAGS, the product name
//not dynamic: h4 tags with the product info



class ProductModal extends React.Component {
  render () {

    

    return (
      <section className="productDetails">
        <div className="productDetails__header">
        {/* add href to back buttonimage  */}
          <img src={backButton} alt=''></img>
          <h1 className="header__h1">Product Name</h1> 
          <button disabled className="green-button">In Stock</button>
        </div>
  <div className="grey-border">
      <div className="productDetails__description">
        <h4>ITEM DESCRIPTION</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</span>
      </div>
    <div className="desktop-div">
      <section className="productDetails__details">
        <div className="row-1">
          <article>
            <h4>ORDERED BY</h4>
            <span>order date</span>
          </article>
          <article>
            <h4>REFERENCE NUMBER</h4>
            <span>12345678910</span>
          </article>
        </div>
        <div className="row-2">
        <article>
            <h4>LAST ORDERED</h4>
            <span>a number</span>
          </article>
          <article>
            <h4>LOCATION</h4>
            <span>a city name</span>
          </article>
        </div>
      </section>
      <div className="category-name">
      <h4>CATEGORIES</h4>
          <span>this is a summary of the items</span>
      </div>
    </div>


    </div>
        <button className="blue-button">
          <h4>EDIT</h4>
        </button>
      </section>

    )
  }
}

export default ProductModal;
