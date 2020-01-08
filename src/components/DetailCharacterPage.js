import React, { Component } from 'react';
import './style/Card.scss'

export class DetailCharacterPage extends Component {

    deleteHero = () => {
        this.props.history.push('/')
        this.props.deleteSuper(this.props.character)
    }

    render() {

        
        return (
            <div>

            {this.props.character ? 
<div> 
    <center><img alt={ this.props.character.name } src={ this.props.character.image_url } style={{width: "250px", height: "350px"}} /></center>
    <center>{ this.props.character.alignment === 'good' ? <h1>Hero Name: { this.props.character.name }</h1> : <h1>Villain Name: { this.props.character.name } </h1>}</center>
    <center>
        <ul>
            <li>Real Name: { this.props.character.full_name }</li>
            <li>Aliases: { this.props.character.aliases}</li>
            <li>Birth place: { this.props.character.place_of_birth }</li>
            <li>Gender: { this.props.character.gender }</li>
            <li>Race: { this.props.character.race }</li>
            <li>Eye color: { this.props.character.eye_color }</li>
            <li>Hair color: { this.props.character.hair_color }</li>
            <li>Intelligence: { this.props.character.intelligence }</li>
            <li>Strength: { this.props.character.strength }</li>
            <li>Speed: { this.props.character.speed }</li>
            <li>Durability: { this.props.character.durability }</li>
            <li>Power: { this.props.character.power }</li>
            <li>Combat: { this.props.character.combat }</li>
            <li>Height: { this.props.character.height_feet}</li>
            <li>Relatives: { this.props.character.relatives }</li>
            <li>Occupation: { this.props.character.occupation }</li>
            <li>Group Affiliation: { this.props.character.group_affiliation }</li>
            
        </ul>
    </center>
  

    <center>
        <button id={ this.props.character.id }>{ this.props.character.alignment === 'good' ? 'Edit this Hero' : 'Edit this Villain'}</button>
        <br />
        <button id={ this.props.character.id } onClick={ this.deleteHero }>{ this.props.character.alignment === 'good' ? 'Delete this Hero' : 'Delete this Villain'}</button>
        <br />
        <button id={ this.props.character.id } onClick={ this.props.goBack } >Go Back</button>
    </center>
    
</div>
                :
                <div>
                    hi
                </div>    
        }
                       
                      
        </div>
        );
    }
}

export default DetailCharacterPage;




