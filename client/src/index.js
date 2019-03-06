import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

const inventory = [
  {
    name: "AT4040 Condensor Mic",
    description: "lkjsdl dfkdkfl lsjdflks dfkjslkfjsf sljdflksjkfjlks dkfjdkfj",
    ordered: new Date("3/25/2018"),
    location: "Orlando, FL",
    quantity: "3000",
    status: true
  },
  {
    name: "Focusrite 2i2 Audio Interface",
    description: "ldjf fdlkjfksdl lsjdkf lksdlkfj lajsdkfjs lsdjfkj lksjdf",
    ordered: new Date("12/13/2018"),
    location: "Atlanta, GA",
    quantity: "60000",
    status: true
  },
  {
    name: "Lego NXT Robotics Kit",
    description: "lkdjf lsdjflksjfd ldjfkjsdklf lksjdfksjf lkjdfklsj ",
    ordered: new Date("2/20/2019"),
    location: "Portland, OR",
    quantity: "34442",
    status: false
  },
  {
    name: "AT4040 Condensor Mic",
    description: "lkjsdl dfkdkfl lsjdflks dfkjslkfjsf sljdflksjkfjlks dkfjdkfj",
    ordered: new Date("3/25/2018"),
    location: "Orlando, FL",
    quantity: "3000",
    status: true
  },
  {
    name: "Focusrite 2i2 Audio Interface",
    description: "ldjf fdlkjfksdl lsjdkf lksdlkfj lajsdkfjs lsdjfkj lksjdf",
    ordered: new Date("12/13/2018"),
    location: "Atlanta, GA",
    quantity: "60000",
    status: true
  },
  {
    name: "Lego NXT Robotics Kit",
    description: "lkdjf lsdjflksjfd ldjfkjsdklf lksjdfksjf lkjdfklsj ",
    ordered: new Date("2/20/2019"),
    location: "Portland, OR",
    quantity: "34442",
    status: false
  }

]
ReactDOM.render(
  <App inventory={inventory} />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
