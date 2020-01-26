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
    loggedInUserId: localStorage.userId,
    username: '',
    password: ''
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

  logInSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(res_obj => {
      
      console.log(res_obj)
      if (res_obj.errors) {
        
      } else {
        this.setToken(res_obj)
        // this.props.getUser(res_obj)
        // this.props.history.push('/movies')
      }
    })
  }

setToken = ({ token, user_id })  =>{
  localStorage.token = token
  localStorage.setItem("token", token)
  localStorage.userId = user_id
  this.setState({
    token: token,
    loggedInUserId: user_id
  })
}

changeUsername = (e) => {
  this.setState({
    username: e.target.value
  })
}

changePassword = (e) => {
  this.setState({
    password: e.target.value
  })
}

  render() {
    console.log(this.state.username);
    console.log(this.state.password);
    return (
      <div className='app'>
      {this.state.singleCharacter ? <Redirect to="/character-detail" /> : <Redirect to="/" />}
        <Header goBack={ this.goBack }/>
        <br />
        <Switch>
          <Route exact path={'/login'} render={(props) => <Login changeUsername={ this.changeUsername } changePassword={ this.changePassword } logInSubmitted={ this.logInSubmitted } login={ this.login } loginUsername={ this.state.username } password={ this.state.password } tokan={ this.state.tokan }/>} />
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
