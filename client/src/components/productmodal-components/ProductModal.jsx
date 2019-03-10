import React from 'react';
import './productmodal.css';
import axios from 'axios';
import backButton from '../../assets/icons/SVG/Icon-back-arrow.svg'

//dynamic with axios call : SPAN TAGS, the product name
//not dynamic: h4 tags with the product info

const inventoryId = id => `http://localhost:8080/inventory/${id}`
const inventoryList = 'http://localhost:8080/inventory'

class ProductModal extends React.Component {
  constructor () {
    super ()
    this.state = {
      productName: [],
      productDescription: [],
      productOrdered: [],
      productLocation: [],
      productQuantity: [],
      productStatus: [],
      productId: '',
    }
  }
  componentDidMount () {
    axios
    .get(inventoryList)
    .then(response => {
      console.log(response.data[0])
      const products = response.data[0].map(product => {
        return
      })
      console.log(products)
    })
  }


//   this.setState ({
//     productName: response.data[0].name,
//     productDescription: response.data[0].description,
//     productOrdered: response.data[0].ordered,
//     productLocation: response.data[0].location,
//     productQuantity: response.data[0].quantity, 
//     productStatus: response.data[0].status
// })
     

//EXAMPLE:
//   axios
//   .get(`https://images-api.nasa.gov/search?q=` + `search`)
//   .then(res => res.data.collection.items)
//   .then(json => {
//     json.map(obj => this.setState({ allTheValues: Object.values(obj) }))
//   })

  
  
  render () {
    return (
      <section className="productDetails">
        <div className="productDetails__header">
        {/* add href to back buttonimage  */}
          <img src={backButton} alt=''></img>
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



  // if(this.props.match.params.id !== prevProps.match.params.id)

  // this.setState ({
      //   productName: response.data[0].name,
      //   productDescription: response.data[0].description,
      //   productOrdered: response.data[0].ordered,
      //   productLocation: response.data[0].location,
      //   productQuantity: response.data[0].quantity, 
      //   productStatus: response.data[0].status
      // })




    // .then (() => {
    //   axios
    //     .get(inventoryId (this.state.productId))
    //     .then(response => {
    //       console.log(response)
    //       this.setState ({
    //         productName: response.data.name,
    //         productDescription: response.data.description,
    //         productOrdered: response.data.ordered,
    //         productLocation: response.data.location,
    //         productQuantity: response.data.quantity, 
    //         productStatus: response.data.status
    //       })
    //     })
    // })
  
    
  // const products = [];
  //       json.data.results.forEach(result => {
  //           products.push(...result.products);
  //       });

