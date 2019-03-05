import React, { Component } from "react";
import "./CreateNewModal.css";
class CreateNew extends Component {
  render() {
    return (
      <div className='modal'>
        <h3>Create New</h3>
        <form className='modal-content'>
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
                <label className='switch'>
                  <input type='checkbox' />
                  <span className='slider round' />
                </label>
              </div>
            </div>
          </div>
          <div className='flex-column'>
            <h5>Item Description</h5>
            <input type='text' />
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
