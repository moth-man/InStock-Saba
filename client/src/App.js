import React, { Component } from "react";
import CreateNewModal from "./Component/CreateNewModal/CreateNew";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CreateNewModal />
      </div>
    );
  }
}

export default App;
