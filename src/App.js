import React, { Component } from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { faCog, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home from './components/Home';
import About from './components/AboutYou';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import './loader.css';
// import './assets/css/theme-3.css';

class App extends Component {
  componentDidMount() {
    this.triggerTheme();
    this.clickEvents();
  }

  clickEvents = () => {
    /* ======= DEMO THEME CONFIG ====== */
    $('#config-trigger').click(function (e) {

      e.preventDefault();

      //$("#config-panel").toggleClass('config-panel-open');

      if ($(this).hasClass('config-panel-open')) {
        $("#config-panel").animate({
          right: "-=190" //same as the panel width
        }, 500);
        $(this).removeClass('config-panel-open').addClass('config-panel-hide');
      }
      else {
        $("#config-panel").animate({
          right: "+=190" //same as the panel width
        }, 500);
        $(this).removeClass('config-panel-hide').addClass('config-panel-open');
      }
    });

    $('#config-close').on('click', function (e) {
      e.preventDefault();
      $('#config-trigger').click();
    });

    
    $('#color-options a').on('click', function(e) { 
      var $styleSheet = $(this).attr('data-style');
      $('#theme-style').attr('href', $styleSheet);
      var $listItem = $(this).closest('li');
      $listItem.addClass('active');
      $listItem.siblings().removeClass('active');
      e.preventDefault();
    });
  }

  triggerTheme = (e) => {
    if (!e) {
      return null;
    }
    let sheet = document.getElementById('theme-style');
    
    if (!sheet) {
      sheet = document.createElement('link');
      sheet.rel = 'stylesheet';
      sheet.href = e || './assets/css/theme-1.css';
      sheet.type = 'text/css';
      sheet.id = "theme-style";
      document.head.appendChild(sheet);
    } else {
      sheet.rel = 'stylesheet';
      sheet.href = e || './assets/css/theme-1.css';
      sheet.type = 'text/css';
      sheet.id = "theme-style";
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <ErrorBoundary>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={ContactUs}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/blog-post' component={BlogPost}></Route>
            </ErrorBoundary>
          </Switch>
          <div id="config-panel" className="config-panel d-none d-lg-block">
            <div className="panel-inner">
              <a id="config-trigger" className="config-trigger config-panel-hide text-center pt-2" href="#"><FontAwesomeIcon className="fas fa-spin mx-auto" icon={faCog} data-fa-transform="down-6" /> </a>
              <h5 className="panel-title">Choose Colour</h5>
              <ul id="color-options" className="list-inline mb-0">
                <li className="theme-1 active list-inline-item"><a data-style='/css/theme-1.css' href=""></a></li>
                <li className="theme-2  list-inline-item"><a data-style='/css/theme-2.css' href=""></a></li>
                <li className="theme-3  list-inline-item"><a data-style='/css/theme-3.css' href=""></a></li>
                <li className="theme-4  list-inline-item"><a data-style='/css/theme-4.css' href=""></a></li>
                <li className="theme-5  list-inline-item"><a data-style='/css/theme-5.css' href=""></a></li>
                <li className="theme-6  list-inline-item"><a data-style='/css/theme-6.css' href=""></a></li>
                <li className="theme-7  list-inline-item"><a data-style='/css/theme-7.css' href=""></a></li>
                <li className="theme-8  list-inline-item"><a data-style='/css/theme-8.css' href=""></a></li>
              </ul>
              <a id="config-close" className="close" href="#"><FontAwesomeIcon icon={faTimesCircle} /> </a>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App; 
