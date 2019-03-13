import React from 'react';
import './productmodal.css';
import backButton from '../../assets/icons/SVG/Icon-back-arrow.svg';
import { Link } from "react-router-dom";
import axios from 'axios';


const newUrl = `http://localhost:8080/inventory`;
const currentProduct = id => `http://localhost:8080/inventory/${id}`


class ProductModal extends React.Component {
  constructor () {
    super() 
      this.state = {
        // name: [],
        // description: [],
        // ordered: [],
        // quantity: [],
        products: [],
      }
  }
  // console.log(this.props.match.params.id)
  componentDidMount () {
    axios
    .get(newUrl)
    .then(response => {
      console.log(response.data)
      this.setState({ products:response.data})
    })
    .then (() => { 
      axios.get(currentProduct(this.props.match.params.id))
      .then(response  => {
        const {name, description, ordered, quantity, location, id } = response.data 
        this.setState ({
          name: name,
          description: description,
          ordered: ordered,
          quantity: quantity,
          location: location,
        })
      })
    })
  }
  
 
  render () {
    return (
      <section className="productDetails">
        <div className="productDetails__header">
        <Link to={"/inventory"}>
          <img src={backButton} alt=''></img>
        </Link>
          <h1 className="header__h1">{this.state.name}</h1> 
          <button disabled className="green-button">In Stock</button>
        </div>
  <div className="grey-border">
      <div className="productDetails__description">
        <h4>ITEM DESCRIPTION</h4>
          <span>{this.state.description}</span>
      </div>
    <div className="desktop-div">
      <section className="productDetails__details">
        <div className="row-1">
          <article>
            <h4>ORDERED BY</h4>
            <span>{this.state.ordered}</span>
          </article>
          <article>
            <h4>REFERENCE NUMBER</h4>
            <span>12345678910</span>
          </article>
        </div>
        <div className="row-2">
        <article>
            <h4>LAST ORDERED</h4>
            <span>{this.state.ordered}</span>
          </article>
          <article>
            <h4>LOCATION</h4>
            <span>{this.state.location}</span>
          </article>
        </div>
      </section>
      <div className="category-name">
      <h4>CATEGORIES</h4>
          <span>{this.state.description}</span>
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




  // componentDidMount () {
  //   const productValue = this.props.product.find(productId => {
  //     return productId.id === this.props.match.params.id
  //   })
  //   console.log(productValue)
    // if(this.props.product == undefined || []) {
    //   return ('loading!'); 
    // }
    // this.setState ({
    //   product: productValue
    // })
    // console.log(productValue)
  // }

    //   const productValue = this.props.product.find(productId => {
  //   return productId == this.props.match.params.id
  //   }) 

  //   console.log(productValue)
