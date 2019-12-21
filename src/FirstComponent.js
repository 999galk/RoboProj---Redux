import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//extends component meaning we are creating a new component. 
/*
class FirstComponent extends Component {
  //use render then return what you want to render
  render() {
    return (
      //why do we use className and not class as it is in HTML? cause this is a JS file so its actually JSX written in here. class is a reserve word in JS (class for objects creation) so we need to use className instead
      // The fact that we're importing react allows us to use this html like languege called JSX, the JSX is actually react's "virtual DOM".
      // React compares the virtual DOM created using JSX to the actual page DOM and that how it knows what changes should be made.
      //The 'f1 tc' in the class name is tachyons classes for font1 and textCenter
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.props.greeting}</p>
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
*/

//You can do the same just as a function instead of as an object:

const FirstComponent = (props) =>{
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{props.greeting}</p>
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


// you have to export or else nothing will be available to other apps to use. export default means that in this file were only exporting 1 thing (app).

export default FirstComponent;
