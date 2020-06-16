import React from 'react';
import Super from './Super'

const AllSupers = (props) => {

    const allSupers = props.allCharacters.map(char => <Super character={ char } id={ char.id } aboutSuper={ props.aboutSuper }/>)
    return (
        <div className="container">
            <div className="row">
                { allSupers }
            </div>
        </div>
    );
}

export default AllSupers;
