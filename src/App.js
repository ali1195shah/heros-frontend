import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import DetailChatacterPage from './components/DetailCharacterPage'
import './App.css'
import Header from './components/Header'
import NewSuper from './components/NewSuper'
import Login from './components/Login'
import FavSuper from './components/FavSuper'
import RamdomSuper from './components/RamdomSuper'


export class App extends Component {

  state = {
    allCharacters: [],
    singleCharacter: null,
    ramdomCharacter: null,
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
    username: localStorage.userName
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


setToken = ({ token, user_id, userName })  =>{
  localStorage.token = token
  localStorage.setItem("token", token)
  localStorage.userId = user_id
  localStorage.userName = userName
  this.setState({
    token: token,
    loggedInUserId: user_id,
    username: userName
  })
}

ramdomCharacter = () => {
  const length = this.state.allCharacters.length
  const rhv = Math.floor(Math.random() * length) + 1
  // console.log(length, rhv)
  this.setState({
    ramdomCharacter: this.state.allCharacters.find(char => char.id === rhv)
  })
}

  render() {
    console.log(this.state.token)
    return (
      <div className='app'>
        <Header ramdomCharacter={ this.ramdomCharacter } userName={ this.state.username } token={this.state.token} goBack={ this.goBack }/>
      {this.state.singleCharacter ? <Redirect to="/character-detail" /> : <Redirect to="/heros-vs-villains" />}
        <br />
        <Switch>
          <Route exact path={'/login'} render={(props) => <Login {...props} setToken={ this.setToken } tokan={ this.state.tokan }/>} />
          <Route exact path={'/heros-vs-villains'} render={(props) => <AllCharacters {...props} allCharacters={ this.state.allCharacters } handleClick={ this.handleClick }/> }/>
          <Route exact path={'/character-detail'} render={(props) => <DetailChatacterPage character={ this.state.singleCharacter } goBack={ this.goBack } deleteSuper={ this.deleteSuper } {...props} />} />
          <Route exact path={'/new-sv'} render={(props) => <NewSuper {...props} updateState={ this.updateState }  /> }/>
          <Route exact path={'/favorite-supers'} render={(props)=> <FavSuper {...props} /> } />
          <Route exact path={'/ramdom-hero/villain'} render={(props)=> <RamdomSuper {...props} goBack={ this.goBack } character={ this.state.ramdomCharacter }/> } />
        </Switch>
        {this.state.token ? null : <Redirect to='/login' />}
      </div>
    );
  }
}

export default withRouter(App);
