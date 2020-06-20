import React from 'react';

const EditSuper = (props) => {
    return (
        <div>
            <form>
            <div className="segment">
            <h1>Editing { props.superDetails.name }</h1>
            </div>
            <label>
                <input type="text" placeholder="Email Address"/>
            </label>
            <label>
                <input type="password" placeholder="Password"/>
            </label>
                <button className="red" type="button"><i className="icon ion-md-lock"></i> Log in</button>
            </form>
        </div>
    );
}

export default EditSuper;
