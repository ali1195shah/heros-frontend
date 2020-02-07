import React, { Component } from 'react';
import './style/NewSuper.css'

export class NewSuper extends Component {

    state = {
        name: "",
        rname: "",
        aliase: "",
        birth: "",
        race: "",
        eye: "",
        hair: "",
        occupation: "",
        groups: "",
        relatives: "",
        ini: "",
        str: "",
        speed: "",
        dur: "",
        pow: "",
        com: ""
    }

    changeThisNow = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
        console.log(this.state)
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
              aliases: this.state.aliase ,
              place_of_birth: this.state.birth ,
              // alignment: this.state. ,
              // gender: this.state. ,
              race: this.state.race , 
              // height_feet: this.state. , 
              eye_color: this.state.eye , 
              hair_color: this.state.hair , 
              occupation: this.state.occupation , 
              group_affiliation: this.state.groups , 
              relatives: this.state.relatives
              // image_url
            })
        })
        .then(res => res.json())
        .then(data => {
           this.props.updateState(data)
        })
        this.props.history.push('/')
      }

    render() {
        return (
            <div>
    
            {/* <body className="contactBody">    */}
            <div className="wrapper">
            <div className="title">
               
          
            </div>
          
    
            <form className="form" onSubmit={ this.makingNewSuper }>
    
            <select>
                <option value="A">Hero</option>
                <option value="B">Villian</option>
            </select>
    
              <input name="name" onChange={ this.changeThisNow } type="text" className="n entry" value={ this.state.name } placeholder="Name"/>
    
              <input name="rname" onChange={ this.changeThisNow } type="text" className="real_name entry" value={ this.state.rname } placeholder="Real Name"/>
    
              <input name="aliase" onChange={ this.changeThisNow } type="text" className="aliases entry" value={ this.state.aliase } placeholder="Aliases"/>
    
              <input name="birth" onChange={ this.changeThisNow } type="text" className="birth entry" value={ this.state.birth } placeholder="Place of birth"/>
    
              <input name="race" onChange={ this.changeThisNow } type="text" className="race entry" value={ this.state.race } placeholder="Race"/>
    
              <input name="eye" onChange={ this.changeThisNow } type="text" className="eye entry" value={ this.state.eye } placeholder="Eye Color"/>
              
              <input name="hair" onChange={ this.changeThisNow } type="text" className="hair entry" value={ this.state.hair } placeholder="Hair Color"/>
    
              <textarea name="occupation" onChange={ this.changeThisNow } className="occupation entry" value={ this.state.occupation } placeholder="Occupation"></textarea> 
              
              <textarea name="groups" onChange={ this.changeThisNow } className="affiliation entry" value={ this.state.groups } placeholder="Group Affiliation"></textarea> 
    
              <textarea name="relatives" onChange={ this.changeThisNow } className="relatives entry" value={ this.state.relatives } placeholder="Relatives"></textarea> 
    
              Intelligence<input name="ini" onChange={ this.changeThisNow } type="number" value={ this.state.ini } className="intel entry" />
    
              Strength<input name="str" onChange={ this.changeThisNow } type="number" value={ this.state.str } className="strength entry" />
              
              Speed<input name="speed" onChange={ this.changeThisNow } type="number" value={ this.state.speed } className="speed entry" />
    
              Durability<input name="dur" onChange={ this.changeThisNow } type="number" value={ this.state.dur } className="durability entry" />
    
              Power<input name="pow" onChange={ this.changeThisNow } type="number" value={ this.state.pow } className="power entry" />
    
              Combat<input name="com" onChange={ this.changeThisNow } type="number" value={ this.state.com } className="combat entry" />
    
              <button className="submit entry">Submit</button>
            </form>  
            
            <div className="shadow"></div>
          </div>
          
                <script src="app.js"></script>
            {/* </body> */}
            </div>
        );
    }
}

export default NewSuper;

