import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters'
import { Route, Switch, Redirect } from 'react-router-dom'
import DetailChatacterPage from './components/DetailCharacterPage'

export class App extends Component {

  state = {
    allCharacters: [],
    singleCharacter: null
  }

  componentDidMount = async() => {
    let characters = await fetch('http://localhost:3000/superheros')
    let allCharacters = await characters.json()
      this.setState({
        allCharacters
    })
  }

  // ===================functions=================

  handleClick = (e) => {
    console.log(e.target.id)
    fetch(`http://localhost:3000/superheros/${e.target.id}`)
    .then(response => response.json())
    .then(singleCharacter => {
        this.setState({
            singleCharacter
        })
    })
  }

  goBack = (e) => {
    e.preventDefault();
    this.setState({
      singleCharacter: null
    })
  }


  render() {
    return (
      <div>
        {this.state.singleCharacter ? <Redirect to="/character-detail" /> : <Redirect to="/" />}
        <Switch>
          <Route exact path={'/'} render={(...props) => <AllCharacters allCharacters={ this.state.allCharacters } handleClick={ this.handleClick }/> }/>
          <Route exact path={'/character-detail'} render={(...props) => <DetailChatacterPage character={ this.state.singleCharacter } goBack={ this.goBack } />} />
        </Switch>
      </div>
    );
  }
}

export default App;
