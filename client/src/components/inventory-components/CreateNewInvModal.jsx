import React, { Component } from 'react';
import './CreateNewModal.css';
import Switch from 'react-switch';
const inventoryURL = `http://localhost:8080/inventory`;

class CreateNewInvModal extends Component {
  constructor() {
    super();
    this.state = {
      instock: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  post = onClick => {
    if (
      !this.item_name.value ||
      !this.date.value ||
      !this.city.value ||
      !this.country.value ||
      !this.quantity_items.value
    ) {
      onClick.preventDefault();
      alert('Please enter all required input fields');
    }
    const formData = {
      status: this.state.instock,
      name: this.item_name.value,
      ordered: this.date.value,
      location: this.city.value + ', ' + this.country.value,
      quantity_items: this.quantity_items.value,
      item_description: this.item_description.value
    };

    this.props.formSubmit(inventoryURL, formData);

    onClick.preventDefault();
    this.refs.modal.style.display = 'none';
    this.refs.overlay.style.display = 'none';
  };

  cancel = onClick => {
    onClick.preventDefault();
    this.refs.modal.style.display = 'none';
    this.refs.overlay.style.display = 'none';
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
      <div className="overlay" ref="overlay">
        <div className="modal" ref="modal">
          <form className="modal-content">
            <h3>Create New</h3>
            <div className="flex-wrap">
              <div className="flex-column">
                <h5>PRODUCT</h5>
                <input
                  type="text"
                  placeholder="Item Name"
                  name="item_name"
                  ref={self => (this.item_name = self)}
                />
              </div>
              <div className="flex-column">
                <h5>LAST ORDERED</h5>
                <input
                  type="text"
                  placeholder="yyyy-mm-dd"
                  name="date"
                  ref={self => (this.date = self)}
                />
              </div>
              <div className="flex-column">
                <h5>CITY</h5>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  ref={self => (this.city = self)}
                />
              </div>
              <div className="flex-column">
                <h5>COUNTRY</h5>
                <select name="country" ref={self => (this.country = self)}>
                  <option value="" />
                  <option value="CA">Canada</option>
                </select>
              </div>
              <div className="flex-column">
                <h5>QUANTITY</h5>
                <input
                  type="text"
                  name="quantity_items"
                  id=""
                  placeholder="0"
                  ref={self => (this.quantity_items = self)}
                />
              </div>
              <div className="">
                <div className="flex-column">
                  <h5>STATUS</h5>
                  <div className="flex-row spacebetween">
                    <p className="instock">In Stock</p>
                    <Switch
                      onChange={this.handleChange}
                      checked={this.state.instock}
                      className="react-switch"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#6aae2b"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h5>ITEM DESCRIPTION</h5>
            <textarea
              name="item_description"
              id=""
              placeholder="(Optional)"
              ref={self => (this.item_description = self)}
            />
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

export default CreateNewInvModal;
