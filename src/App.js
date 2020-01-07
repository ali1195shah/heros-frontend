import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters'
import { Route, Switch, Redirect } from 'react-router-dom'
import DetailChatacterPage from './components/DetailCharacterPage'
import './App.css'

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
    .then(r => r.json())
    .then(character => {
      this.setState({
        singleCharacter: character
      })
    })
  }

  goBack = () => {
    this.setState({
      singleCharacter: null
    })
    // this.props.history.push('/')
  }


  render() {
    console.log(this.state);
    return (
      <div className='app'>
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
