// import React from 'react';

// const Character = (props) => {
    //     return (
        //         <div id={ props.character.id } className="ui column" >
        
        //             <div className="cards-list">
        
        //                 <div className="card 2">
        //                     <div className="card_image">
        //                         <img alt={props.character.name} src={props.character.image_url} />
        //                     </div>
        
        //                     <div className="card_title title-white">
        //                         <p>{props.character.name}</p>
        //                     </div>
        
        //                 </div>
        
        //             </div>
        
        //         </div>
        //     );
        // }
        
        // export default Character;
        
        
import React, { Component } from 'react';
import './style/Character.css'
import ModalComponent from './ModalComponent'
import {Button, ButtonToolbar} from 'react-bootstrap'

        
export class Character extends Component {

    state = {
        addModalShow: false,
        singleCharacter: []
    }

    addModalClose = () => {
        this.setState({
          addModalShow: false
        })
      }

      hancleclick = (e) => {
        fetch(`http://localhost:3000/superheros/${e.target.id}`)
        .then(response => response.json())
        .then(singleCharacter => {
            this.setState({
                singleCharacter
            })
        })
        this.setState({
            addModalShow: true
          })
      }

    render() {
        return (
            
            <div id={ this.props.character.id } className="ui column" >
        
                     <div className="cards-list">
        
                         <div className="card 2">
                             <div className="card_image">
                                 <img id={ this.props.character.id } alt={this.props.character.name} src={this.props.character.image_url} />
                             </div>
        
                             <div className="card_title title-white">
                                 <p>{this.props.character.name}</p>
                             </div>
        
                         </div>
        
                     </div>
                     <ButtonToolbar>
                     <button onClick={this.hancleclick} type='button'>Click for more Information</button>
                     <ModalComponent 
                        show={this.state.addModalShow}
                        onHide={this.addModalClose}/>
                    </ButtonToolbar>
        
                 </div>
        );
    }
}

export default Character;
