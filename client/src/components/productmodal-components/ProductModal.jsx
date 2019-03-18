import React from 'react';
import './productmodal.css';
import backButton from '../../assets/icons/SVG/Icon-back-arrow.svg';
import { Link } from 'react-router-dom';

class ProductModal extends React.Component {
  render() {
    const currentProduct = this.props.inventory.filter(item => {
      return this.props.match.params.id === item.id;
    });

    return (
      <section className="productDetails">
        <div className="productDetails__header">
          <Link to={'/inventory'}>
            <img src={backButton} alt="" />
          </Link>
          <h1 className="header__h1">{currentProduct[0].name}</h1>
          <button disabled className="green-button">
            In Stock
          </button>
        </div>
        <div className="grey-border">
          <div className="productDetails__description">
            <h4>ITEM DESCRIPTION</h4>
            <span>{currentProduct[0].description}</span>
          </div>
          <div className="desktop-div">
            <section className="productDetails__details">
              <div className="row-1">
                <article>
                  <h4>ORDERED BY</h4>
                  <span>{currentProduct[0].ordered}</span>
                </article>
                <article>
                  <h4>REFERENCE NUMBER</h4>
                  <span>12345678910</span>
                </article>
              </div>
              <div className="row-2">
                <article>
                  <h4>LAST ORDERED</h4>
                  <span>{currentProduct[0].ordered}</span>
                </article>
                <article>
                  <h4>LOCATION</h4>
                  <span>{currentProduct[0].location}</span>
                </article>
              </div>
            </section>
            <div className="category-name">
              <h4>CATEGORIES</h4>
              <span>{currentProduct[0].categories}</span>
            </div>
          </div>
        </div>
        <button className="blue-button">
          <h4>EDIT</h4>
        </button>
      </section>
    );
  }
}
export default ProductModal;
