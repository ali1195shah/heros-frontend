import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters'

export class App extends Component {

  state = {
    allCharacters: []
  }

  componentDidMount = async() => {
    let characters = await fetch('http://localhost:3000/superheros')
    let allCharacters = await characters.json()
      this.setState({
        allCharacters
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <AllCharacters allCharacters={ this.state.allCharacters }/>
      </div>
    );
  }
}

export default App;
