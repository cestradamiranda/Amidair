//  api.openweathermap.org/data/2.5/weather?q=Mirabel,ca&APPID=40b692ad8785628b93f95e632d031111
import React, { Component } from 'react';
import '../App.css'

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
        console.log("dfdsfd" + json);
      })   

  };
      
  render() {
    //c'ant work with objects inside render
    return (
    <div className="App-mirabel">
           <div>Name: {this.state.myData.name} </div>
    </div>
    );
  }
  
}

export default MirabelConditions;