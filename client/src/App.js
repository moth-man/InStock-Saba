import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import CreateNew from './components/CreateNewModal/CreateNew'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CreateNew />
      </div>
    );
  }
}

export default App;
