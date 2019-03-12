import React, { Component } from 'react';
import './WarehouseModal.css';
const warehouseURL = `http://localhost:8080/warehouses`;

class Warehouse extends Component {
  post = onClick => {
    if (
      !this.warehouseName.value ||
      !this.address.value ||
      !this.contact.value ||
      !this.contactNum.value ||
      !this.contactEmail.value ||
      !this.categories.value
    ) {
      onClick.preventDefault();
      return alert('Please enter all required input fields');
    }

    const formData = {
      warehouseName: this.warehouseName.value,
      address: this.address.value,
      contact: this.contact.value,
      contactTitle: 'Manager',
      contactNum: this.contactNum.value,
      contactEmail: this.contactEmail.value,
      categories: this.categories.value
    };

    console.log(formData);

    this.props.formSubmit(warehouseURL, formData);

    onClick.preventDefault();
    this.refs.modal.style.display = 'none';
    this.refs.overlay.style.display = 'none';
  };

  cancel = onClick => {
    onClick.preventDefault();
    this.refs.modal.style.display = 'none';
    this.refs.overlay.style.display = 'none';
  };

  render() {
    return (
      <div className="overlay" ref="overlay">
        <div className="modal" ref="modal">
          <form className="modal-content">
            <h3>Create New</h3>
            <div className="flex-wrap">
              <div className="flex-column">
                <h5>WAREHOUSE NAME</h5>
                <input
                  type="text"
                  placeholder="Warehouse Name"
                  name="warehouseName"
                  ref={self => (this.warehouseName = self)}
                />
              </div>

              <div className="flex-column">
                <h5>ADDRESS</h5>
                <input
                  type="text"
                  placeholder="123 1st Ave, Vancouver, BC"
                  name="address"
                  ref={self => (this.address = self)}
                />
              </div>
              <div className="flex-column">
                <div className="flex-column">
                  <h5>CONTACT NAME</h5>
                  <input
                    type="text"
                    placeholder="Joan Smith"
                    name="contact"
                    ref={self => (this.contact = self)}
                  />
                </div>
              </div>
              <div className="flex-column">
                <h5>CONTACT NUMBER</h5>
                <input
                  type="text"
                  placeholder="123-232-2222"
                  name="contactNum"
                  ref={self => (this.contactNum = self)}
                />
              </div>
              <div className="flex-column">
                <h5>EMAIL</h5>
                <input
                  type="text"
                  name="contactEmail"
                  id=""
                  placeholder="123@instock.com"
                  ref={self => (this.contactEmail = self)}
                />
              </div>
              <div className="flex-column">
                <h5>CATEGORIES</h5>
                <input
                  type="text"
                  placeholder="Industrial, Electronics"
                  name="categories"
                  ref={self => (this.categories = self)}
                />
              </div>
            </div>
            <div className="flex-column movedatbutton">
              <div className="flex-column button">
                <button onClick={this.post}>SAVE</button>
                <button onClick={this.cancel} className="cancel">
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
