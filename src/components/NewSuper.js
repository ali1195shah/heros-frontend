import React, { Component } from 'react';
import '../styles/new.css'

export class NewSuper extends Component {

    state = {
        name: "",
        img: "",
        rname: "",
        aliase: "",
        birth: "",
        race: "",
        eye: "",
        hair: "",
        gender: "",
        occupation: "",
        groups: "",
        relatives: "",
        ini: "",
        str: "",
        speed: "",
        dur: "",
        pow: "",
        com: "",
        hov: ""
    }

    changeThisNow = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
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
              name: this.state.name,
              intelligence: this.state.ini ,
              strength: this.state.str , 
              speed: this.state.speed , 
              durability: this.state.dur , 
              power: this.state.pow , 
              combat: this.state.com , 
              full_name: this.state.rname ,
              place_of_birth: this.state.birth ,
              alignment: this.state.hov ,
              gender: this.state.gender ,
              race: this.state.race , 
              // height_feet: this.state. , 
              eye_color: this.state.eye , 
              hair_color: this.state.hair , 
              occupation: this.state.occupation , 
              relatives: this.state.relatives,
              image_url: this.state.img
            })
        })
        .then(res => res.json())
        .then(data => {
           this.props.updateState(data)
        })
        this.props.history.push('/supers')
      }

    render() {
        return (
            <div className="login-box">
            <h2>New Super</h2>
            <form onSubmit={ this.makingNewSuper }>
            <select style={{marginLeft: '40%'}} onChange={ this.changeThisNow } value={ this.state.hov } name="hov">
                <option value="A">Hero</option>
                <option value="B">Villian</option>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </select>
            
                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.name } type="text" name="name" required=""/>
                    <label>Name</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.rname } type="text" name="rname" required=""/>
                    <label>Full/Real Name</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.race } type="text" name="race" required=""/>
                    <label>Race</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.birth } type="text" name="birth" required=""/>
                    <label>Birth place</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.eye } type="text" name="eye" required=""/>
                    <label>Eye color</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.hair } type="text" name="hair" required=""/>
                    <label>Hair color</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.occupation } type="text" name="occupation" required=""/>
                    <label>Occupation</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.gender } type="text" name="gender" required=""/>
                    <label>Gender</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.relatives } type="text" name="relatives" required=""/>
                    <label>Relatives</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.img } type="text" name="img" required=""/>
                    <label>Image</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.ini } type="number" name="ini" required=""/>
                    <label>Intelligence</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.str } type="number" name="str" required=""/>
                    <label>Strength</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.speed } type="number" name="speed" required=""/>
                    <label>Speed</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.dur } type="number" name="dur" required=""/>
                    <label>Durability</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.pow } type="number" name="pow" required=""/>
                    <label>Power</label>
                </div>

                <div className="user-box">
                    <input onChange={ this.changeThisNow } value={ this.state.com } type="number" name="com" required=""/>
                    <label>Combat</label>
                </div>

                <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </button>
            </form>
            </div>
        );
    }
}

export default NewSuper;
