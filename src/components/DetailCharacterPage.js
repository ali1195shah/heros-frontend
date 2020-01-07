import React, { Component } from 'react';
import './style/Card.scss'

export class DetailCharacterPage extends Component {
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
            <li>Gender: {this.props.character.gender}</li>
            <li>Race: {this.props.character.race}</li>
            <li>Eye color: {this.props.character.eye_color}</li>
            <li>Hair color: {this.props.character.hair_color}</li>
            <li>Height: {this.props.character.height_feet}</li>
            <li>Relatives: { this.props.character.relatives }</li>
            <li>Occupation: { this.props.character.occupation }</li>
            <li>Group Affiliation: { this.props.character.group_affiliation }</li>
    </ul>
    </center>
    
</div>
                :
                <div>
                    hi
                </div>    
        }
        <div>
                            <button onClick={ this.props.goBack } >Go Back</button>
                        </div>
        </div>
        );
    }
}

export default DetailCharacterPage;