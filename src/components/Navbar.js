import React from 'react';
import { Link } from 'react-router-dom'
import './style/Navbar.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = (props) => {
    return (
        <div className="topnav">
           
              <Link to='/'>
                <button className="glow-on-hover" type="button"><img onClick={ props.goBack } src='https://heroesvvillains.com/image/cache/Heroes_v_Villains_Tab-600x315.png' alt="logo"/></button>
              </Link>
                

               
              <Link to='/new-sv'>
                <button className="glow-on-hover" type="button">New Super/Villain</button>
              </Link>

              

                 
                {/* <Link to='/edit-profile'>
                    <button className="glow-on-hover" type="button">Edit Profile</button>
                </Link> */}

              
               
              {/* <Link to='/temp1'>
                <button className="glow-on-hover" type="button">Sign Out</button>
              </Link> */}
              

               
              {/* <div className="search__container">
                  <input className="search__input" type="text" placeholder="Search" />
              </div> */}
                
            </div>
    );
}

export default Navbar;
