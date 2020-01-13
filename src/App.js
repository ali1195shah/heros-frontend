import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import DetailChatacterPage from './components/DetailCharacterPage'
import './App.css'
import Navbar from './components/Navbar'
import NewSuper from './components/NewSuper'


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



  makingNewSuper = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    fetch(`http://localhost:3000/superheros`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name
          // intelligence: this.state.ini ,
          // strength: this.state.str , 
          // speed: this.state.speed , 
          // durability: this.state.dur , 
          // power: this.state.pow , 
          // combat: this.state.com , 
          // full_name: this.state.rname ,
          // aliases: this.state.aliase ,
          // place_of_birth: this.state.birth ,
          // // alignment: this.state. ,
          // // gender: this.state. ,
          // race: this.state.race , 
          // // height_feet: this.state. , 
          // eye_color: this.state.eye , 
          // hair_color: this.state.hair , 
          // occupation: this.state.occupation , 
          // group_affiliation: this.state.groups , 
          // relatives: this.state.relatives
          // image_url
        })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        allCharacters: [...this.state.allCharacters, data]
      })
    })
    // .then(data => {
    //   console.log(data)
    // })
  }


  render() {
    // console.log(this.state);
    return (
      <div className='app'>
        <Navbar goBack={ this.goBack }/>
      {this.state.singleCharacter ? <Redirect to="/character-detail" /> : <Redirect to="/" />}
        <Switch>
          <Route exact path={'/'} render={(props) => <AllCharacters allCharacters={ this.state.allCharacters } handleClick={ this.handleClick }/> }/>
          <Route exact path={'/character-detail'} render={(props) => <DetailChatacterPage character={ this.state.singleCharacter } goBack={ this.goBack } deleteSuper={ this.deleteSuper } {...props} />} />
          <Route exact path={'/new-sv'} render={(props) => <NewSuper makingNewSuper={ this.makingNewSuper }/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
