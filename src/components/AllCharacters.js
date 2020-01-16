import React, { Component } from 'react';
import Character from './Character'

export class AllCharacters extends Component {
    render() {
        const characters = this.props.allCharacters.map(character => <Character character={ character } key={ character.id } handleClick={ this.props.handleClick }/>)
        return (
            <div className="ui five column grid" >
                { characters }
            </div>
        );
    }
}

export default AllCharacters;
