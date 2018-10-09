import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    console.log('Mounted');
  }
  render() {
    var a = "Hello";
    var style = {fontSize:"20px"};
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
     // <div>
     // </div>
     <div>
        <p style={style}>Hey World</p>
        <div>
          <p>{a}</p>
        </div>
     </div>
    );
  }
}

export default App;
