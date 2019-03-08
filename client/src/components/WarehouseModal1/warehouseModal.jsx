import React, { Component } from "react";
import "./Warehouse.css";

import axios from "axios";
const url = "blah.ca";

class Warehouse extends Component {
  constructor() {
    super();
    this.state = {
      warehouseName: "",
      address: "",
      contact: "",
      contactNum: "",
      contactEmail: "",
      categories: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(instock) {
    this.setState({ instock });
  }

  update_input_state = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  post = onClick => {
    if (
      !this.state.warehouseName ||
      !this.state.address ||
      !this.state.contact ||
      !this.state.contactNum ||
      !this.state.contactEmail ||
      !this.state.categories
    ) {
      onClick.preventDefault();
      return alert("Please enter all required input fields");
    }
    axios.post(url, {
      warehouseName: this.state.warehouseName,
      address: this.state.address,
      contact: this.state.contact,
      contactTitle: "Manager",
      contactNum: this.state.contactNum,
      contactEmail: this.state.contactEmail,
      categories: this.state.categories
    });
    onClick.preventDefault();
    this.refs.modal.style.display = "none";
    this.refs.overlay.style.display = "none";
  };

  cancel = onClick => {
    onClick.preventDefault();
    this.refs.modal.style.display = "none";
    this.refs.overlay.style.display = "none";
  };

  render() {
    return (
      <div className='overlay' ref='overlay'>
        <div className='modal' ref='modal'>
          <form className='modal-content'>
            <h3>Create New</h3>
            <div className='flex-wrap'>
              <div className='flex-column'>
                <h5>WAREHOUSE NAME</h5>
                <input
                  type='text'
                  placeholder='Warehouse Name'
                  name='warehouseName'
                  onChange={this.update_input_state}
                />
              </div>

              <div className='flex-column'>
                <h5>ADDRESS</h5>
                <input
                  type='text'
                  placeholder='123 Mullet Ave, Portland, OR'
                  name='address'
                  onChange={this.update_input_state}
                />
              </div>
              <div className='flex-wrap'>
                <div className='flex-column'>
                  <h5>CONTACT NAME</h5>
                  <input
                    type='text'
                    placeholder='Joe Smith'
                    name='contact'
                    onChange={this.update_input_state}
                  />
                </div>
              </div>
              <div className='flex-column'>
                <h5>CONTACT NUMBER</h5>
                <input
                  type='text'
                  placeholder='123-232-2222'
                  name='contactNum'
                  onChange={this.update_input_state}
                />
              </div>
              <div className='flex-column'>
                <h5>EMAIL</h5>
                <input
                  type='text'
                  name='contactEmail'
                  id=''
                  placeholder='123@instock.com'
                  onChange={this.update_input_state}
                />
              </div>
              <div className='flex-column'>
                <h5>CATEGORIES</h5>
                <input
                  type='text'
                  placeholder='Industrial, Electronics, Human Hair'
                  name='categories'
                  onChange={this.update_input_state}
                />
              </div>
            </div>
            <div className='flex-column movedatbutton'>
              <div className='flex-column button'>
                <button onClick={this.post}>SAVE</button>
                <button onClick={this.cancel} className='cancel'>
                  CANCEL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Warehouse;
