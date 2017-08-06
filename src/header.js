import React, { Component } from 'react';
import logo from './Amidair_logo_small.png';
import './App.css';
import SunriseSunset from './services/sunriseSunset';

class Header extends Component {
  
  handleClick() {
    document.location.href = "/";
  }
  
  render() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick}/>
        <SunriseSunset/>        
        </div>
      );
  }
  
}

export default Header;