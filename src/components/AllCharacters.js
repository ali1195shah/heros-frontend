import React, { Component } from 'react';
import Character from './Character'

export class AllCharacters extends Component {
    render() {
        const characters = this.props.allCharacters.map(character => <Character character={ character } key={ character.id }/>)
        return (
            <div className="ui four column grid" >
                { characters }
            </div>
        );
    }
}

export default AllCharacters;
