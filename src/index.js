//react has built in webpack that allows us to use import.
import React from 'react';
//react is a view library , react DOM is used for websites, you can have react native for mobile. You import the view that you want to rander into
import ReactDOM from 'react-dom';
//new syntax for attaching css, now we do it per component, so index.js imports index.css and app.js will have its own app.css
import './index.css';
//here we import app.js, if we're importing js file we dont need to mention the .js at the end its the default
import App from './App';
//import FirstComponent from './FirstComponent';
//service worker - new feature allows our apps to run faster and potentially run offline
import * as serviceWorker from './serviceWorker';
import 'tachyons';

//This is firstComponent example:
//ReactDOM.render(<FirstComponent greeting={'Hello React Ninja!'}/>, document.getElementById('root'));

//This is calling a class called 'app' to be rendered in the DOM element called root. To see the app go to app.js look for class app
ReactDOM.render(<App greeting={'Hello React Ninja!'}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
