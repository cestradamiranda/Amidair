import React, { Component } from 'react';
import Title from './title.js';
import Header from './header.js';
import AmidairNavBar from './AmidairNavBar';
class App extends Component {
 
  
  render() {
    return (
      <div className="App">
        <Header/>
        <AmidairNavBar/>

       <div className="App-content">
          <p >
          To get started, edit <code>src/App.js</code> and save to reload. Saved
        </p>
        <Title/>
       </div>
       
        
      </div>
     
    );
  }
}

export default App;
