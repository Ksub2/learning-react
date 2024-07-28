import React, { Component } from 'react';

import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './Hello.js'

class App extends Component {
  render(){
  return (
    <div className="App"> 
      {/* <Greet  /> */}
      {/* <Welcome /> */}
      <Hello />
    </div>
  );
}

}

export default App;
