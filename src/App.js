import React, { Component } from 'react';
import './App.css';
import { PokeList } from './components';

class App extends Component {
  constructor (){
    super()
    this.state = {}
  }


  render (){
    return (
      <div className="App">
        <PokeList />
      </div>

    )
  }

}

export default App;
