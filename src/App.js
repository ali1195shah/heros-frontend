import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Login from './components/Login.js'
import AllSupers from './components/AllSupers.js'
import AboutSuper from './components/AboutSuper.js'
import Navbar from './components/Bar.js'
import EditSuper from './components/EditSuper.js'
import NewSuper from './components/NewSuper.js'

export class App extends Component {

  state = {
    allCharacters: [],
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
    username: localStorage.userName,
    login: true,
    superDetails: []
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
  })
}

signOut = () => {
  this.setState({
    token: null,
    loggedInUserId: null,
    username: null
  })
  localStorage.clear()
}

aboutSuper = (e) => {
  this.setState({
    superDetails: e
  })
  this.props.history.push("/about")
}

editSuper = (e) => {
  this.props.history.push(`/edit-super/${this.state.superDetails.name}`)
}

updateState = (data) => {
  this.setState({
    allCharacters: [...this.state.allCharacters, data]
  })
}

deleteSuper = (e) => {
  fetch(`http://localhost:3000/superheros/${e.id}` , {
    method: "DELETE"
  })
  .then(this.setState({
    allCharacters: this.state.allCharacters.filter(char => char.id !== e.id)
  }))
  this.props.history.push("/supers")
}





render() {
    return (
      <div>
      {this.state.token ? null : <Redirect to='/' /> }
      <Navbar signOut={ this.signOut } token={ this.state.token }/>
        <Switch>
          <Route exact path={'/'} render={(props) => <Login {...props} setToken={ this.setToken }/> } />
          <Route exact path={'/supers'} render={(props) => <AllSupers {...props} allCharacters={ this.state.allCharacters } aboutSuper={ this.aboutSuper } /> } />
          <Route exact path={`/about`} render={(props) => <AboutSuper {...props} editSuper={ this.editSuper } deleteSuper={ this.deleteSuper } superDetails={ this.state.superDetails } /> } />
          <Route exact path={`/edit-super/${this.state.superDetails.name}`} render={(props) => <EditSuper {...props} superDetails={ this.state.superDetails } /> } />
          <Route exact path={`/new-super`} render={(props) => <NewSuper {...props} updateState={ this.updateState } /> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
