import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Login from './components/Login.js'
import AllSupers from './components/AllSupers.js'

export class App extends Component {

  state = {
    allCharacters: [],
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
    username: localStorage.userName,
    login: true
  }

  componentDidMount = async() => {
    let characters = await fetch('http://localhost:3000/superheros')
    let allCharacters = await characters.json()
      this.setState({
        allCharacters
    })
  }

  // ===================functions=================


  // deleteSuper = (e) => {
  //   // console.log(e)
  //   fetch(`http://localhost:3000/superheros/${e.id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(
  //     this.setState({
  //       allCharacters: this.state.allCharacters.filter(char => char.id !== e.id),
  //       singleCharacter: null
  //     }
  //       // () => this.props.history.push('/') 
  //     )
  //   )
  // }


setToken = ({ token, user_id, userName }) => {
  localStorage.token = token
  localStorage.setItem("token", token)
  localStorage.userId = user_id
  localStorage.userName = userName
  this.setState({
    token: token,
    loggedInUserId: user_id,
    username: userName,
    login: true
  })
}

// signOut = () => {
//   this.setState({
//     login: false
//   })
// }

  render() {
    return (
      <div className='app'>
      {this.state.login ? null : <Redirect to='/' /> }
        <Switch>
          <Route exact path={'/'} render={(props) => <Login {...props} setToken={ this.setToken }/> } />
          <Route exact path={'/supers'} render={(props) => <AllSupers {...props} allCharacters={ this.state.allCharacters } /> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
