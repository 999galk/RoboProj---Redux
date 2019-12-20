import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//extends component meaning we are creating a new component. 
class App extends Component {
  //use render then return what you want to render
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// you have to export or else nothing will be available to other apps to use. export default means that in this file were only exporting 1 thing (app).

export default App;
