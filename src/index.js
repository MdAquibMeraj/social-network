import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./js/reducers";
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(  
rootReducer,  
{ blogs: [] }
);

const rootElement = document.getElementById("root");
// Replace your existing ReactDOM.render() with below
ReactDOM.render(<Provider store={store}><React.StrictMode><App/></React.StrictMode></Provider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
