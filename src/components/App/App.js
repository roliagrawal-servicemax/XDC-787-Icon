import React, { Component } from 'react';
import './App.scss';
import Icon from 'components/Icon';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Icon name="fa-address-book-o" type="font-awesome"/>
        <Icon name="fa-camera-retro fa-3x" type="font-awesome"/>
      </div>
    );
  }
}

export default App;
