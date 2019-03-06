import React, { Component } from "react";
import "./CreateNewModal.css";
import Switch from "react-switch";
import axios from "axios";
const url = "blah.ca";

class CreateNew extends Component {
  constructor() {
    super();
    this.state = {
      instock: false,
      item_name: "",
      date: "",
      city: "",
      country: "",
      quantity_items: "",
      item_description: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  post = () => {
    axios.post(url, {
      instock: this.state.instock,
      item_name: this.state.item_name,
      date: this.state.date,
      city: this.state.city,
      country: this.state.country,
      quantity_items: this.state.quantity_items,
      item_description: this.state.item_description
    });
  };

  handleChange(instock) {
    this.setState({ instock });
  }

  update_input_state = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className='modal'>
        <form className='modal-content'>
          <h3>Create New</h3>
          <div className='flex-column'>
            <h5>PRODUCT</h5>
            <input
              type='text'
              placeholder='Item Name'
              name='item_name'
              onChange={this.update_input_state}
            />
          </div>
          <div className='flex-column'>
            <h5>LAST ORDERED</h5>
            <input
              type='text'
              placeholder='yyyy-mm-dd'
              name='date'
              onChange={this.update_input_state}
            />
          </div>
          <div className='flex-column'>
            <h5>CITY</h5>
            <input
              type='text'
              placeholder='City'
              name='city'
              onChange={this.update_input_state}
            />
          </div>
          <div className='flex-column'>
            <h5>COUNTRY</h5>
            <select name='country' onChange={this.update_input_state}>
              <option value='Canada'>Canada</option>
            </select>
          </div>
          <div className='flex-column'>
            <h5>QUANTITY</h5>
            <input
              type='text'
              name='quantity_items'
              id=''
              placeholder='0'
              onChange={this.update_input_state}
            />
          </div>
          <div className=''>
            <div className='flex-column'>
              <h5>STATUS</h5>
              <div className='flex-row spacebetween'>
                <p>In Stock</p>
                <Switch
                  onChange={this.handleChange}
                  checked={this.state.instock}
                  className='react-switch'
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor='#6aae2b'
                />
              </div>
            </div>
          </div>
          <div className='flex-column'>
            <h5>ITEM DESCRIPTION</h5>
            <textarea
              name='item_description'
              id=''
              placeholder='(Optional)'
              onChange={this.update_input_state}
            />
            <div className='flex-column'>
              <button onClick={this.post}>SAVE</button>
              <button className='cancel'>CANCEL</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNew;
