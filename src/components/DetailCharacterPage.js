import React, { Component } from 'react';

export class DetailCharacterPage extends Component {
    render() {
        return (
            <div>
                <button onClick={ this.props.goBack } >Go Back</button>
            </div>
        );
    }
}

export default DetailCharacterPage;
