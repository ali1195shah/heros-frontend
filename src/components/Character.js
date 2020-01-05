import React from 'react';
import './style/Character.css'

const Character = (props) => {
    return (
        <div id={ props.character.id } className="ui column" >
            <div className="cards-list">
            
                <div className="card 2">
                    <div className="card_image">
                        <img alt={props.character.name} src={props.character.image_url} />
                    </div>

                    <div className="card_title title-white">
                        <p>{props.character.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Character;
