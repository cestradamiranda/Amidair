//  api.openweathermap.org/data/2.5/weather?q=Mirabel,ca&APPID=40b692ad8785628b93f95e632d031111
import React, { Component } from 'react';
import '../App.css'
import get from 'lodash/get'

class MirabelConditions extends Component {
  constructor(props) {
    super(props);
    this.state ={myData: {}};
  }
  componentDidMount() {
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Mirabel,ca&APPID=40b692ad8785628b93f95e632d031111')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((json) => {
        this.setState({
          myData: json
        })
        console.log( "Log: " + json);
      })   

  };
      
  render() {
    //c'ant work with objects inside render
    //get values from json with lodash _ 
    return (
    <div className="App-mirabel">
           <div> Area: {get(this.state.myData, 'name')} </div>
           <div> Sky: {get(this.state.myData, 'weather[0].main')} </div>
           <div> Wind Speed: {get(this.state.myData, 'wind.speed')} </div>
           <div> Wind Degree: {get(this.state.myData, 'wind.deg')} </div>

    </div>
    );
  }
  
}

export default MirabelConditions;