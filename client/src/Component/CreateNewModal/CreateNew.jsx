import React, { Component } from "react";
import "./CreateNewModal.css";
import Switch from "react-switch";
class CreateNew extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className='modal'>
        <form className='modal-content'>
          <h3>Create New</h3>
          <div className='flex-column'>
            <h5>Product</h5>
            <input type='text' placeholder='Item Name' />
          </div>
          <div className='flex-column'>
            <h5>Last Ordered</h5>
            <input type='text' placeholder='yyyy-mm-dd' />
          </div>
          <div className='flex-column'>
            <h5>City</h5>
            <input type='text' placeholder='City' />
          </div>
          <div className='flex-column'>
            <h5>Country</h5>
            <select name='country'>
              <option value='Canada'>Canada</option>
            </select>
          </div>
          <div className='flex-column'>
            <h5>Quantity</h5>
            <input type='text' name='' id='' />
          </div>
          <div className=''>
            <div className='flex-column'>
              <h5>Status</h5>
              <div className='flex-row spacebetween'>
                <p>In Stock</p>
                <Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  className='react-switch'
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor='#79AD3B'
                />
              </div>
            </div>
          </div>
          <div className='flex-column'>
            <h5>Item Description</h5>
            <input type='textbox' className='special' />
            <div className='flex-column'>
              <button>Save</button>
              <button>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNew;
