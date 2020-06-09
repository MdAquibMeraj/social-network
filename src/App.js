import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/AboutYou';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import './App.css';
import './theme-3.css';
import './loader.css';

class App extends Component { 
  render() { 
    return ( 
       <Router>
           <div className="App">
            <Switch> 
              <Route exact path='/' component={Login}></Route> 
              <Route exact path='/home' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={ContactUs}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/blog-post' component={BlogPost}></Route>    
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default App; 
