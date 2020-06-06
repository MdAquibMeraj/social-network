import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/AboutYou';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import './App.css';

class App extends Component { 
  render() { 
    return ( 
       <Router> 
           <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h1 className="navbar-brand">Social Networking</h1>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link" to="/about">About us</Link>
                  <Link className="nav-item nav-link" to="/contact">Contact us</Link>
                  <Link className="nav-item nav-link" to="/login">Login</Link>
                </div>
              </div>
            </nav>
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={ContactUs}></Route>
              <Route exact path='/login' component={Login}></Route> 
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default App; 
