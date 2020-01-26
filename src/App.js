import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import DetailChatacterPage from './components/DetailCharacterPage'
import './App.css'
import Header from './components/Header'
import NewSuper from './components/NewSuper'
import Login from './components/Login'


export class App extends Component {

  state = {
    allCharacters: [],
    singleCharacter: null,
    token: localStorage.token,
    loggedInUserId: localStorage.userId
  }

  componentDidMount = async() => {
    let characters = await fetch('http://localhost:3000/superheros')
    let allCharacters = await characters.json()
      this.setState({
        allCharacters
    })
  }

  // ===================functions=================

  handleClick = (charObject) => {
    // console.log(charObject)
    // fetch(`http://localhost:3000/superheros/${e.target.id}`)
    // .then(r => r.json())
    // .then(character => {
      this.setState({
        singleCharacter: charObject
      })
    // })

  }

  goBack = () => {
    this.setState({
      singleCharacter: null
    })
  }


  deleteSuper = (e) => {
    // console.log(e)
    fetch(`http://localhost:3000/superheros/${e.id}`, {
      method: 'DELETE'
    })
    .then(
      this.setState({
        allCharacters: this.state.allCharacters.filter(char => char.id !== e.id),
        singleCharacter: null
      }
        // () => this.props.history.push('/') 
      )
    )
  }

  updateState = (data) => {
    this.setState({
      allCharacters: [...this.state.allCharacters, data]
    })
  }

logInSubmitted = (e) => {
  e.preventDefault();
  console.log('clicked')
}

  render() {
    // console.log(this.state);
    return (
      <div className='app'>
      {this.state.singleCharacter ? <Redirect to="/character-detail" /> : <Redirect to="/" />}
        <Header goBack={ this.goBack }/>
        <br />
        <Switch>
          <Route exact path={'/login'} render={(props) => <Login logInSubmitted={ this.logInSubmitted } login={ this.login } loginUsername={ this.state.loginUsername } tokan={ this.state.tokan }/>} />
          <Route exact path={'/'} render={(props) => <AllCharacters allCharacters={ this.state.allCharacters } handleClick={ this.handleClick }/> }/>
          <Route exact path={'/character-detail'} render={(props) => <DetailChatacterPage character={ this.state.singleCharacter } goBack={ this.goBack } deleteSuper={ this.deleteSuper } {...props} />} />
          <Route exact path={'/new-sv'} render={(props) => <NewSuper {...props} updateState={ this.updateState }  /> }/>
        </Switch>
        {this.state.token ? null : <Redirect to='/login' />}
      </div>
    );
  }
}

export default withRouter(App);
