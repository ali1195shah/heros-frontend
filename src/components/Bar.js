import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/bar.css'
import { Nav } from 'react-bootstrap'

const Bar = (props) => {
    console.log(props)
    return (
        <>
        { props.ifLogin ? 
            <div className="top-nav">
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">CODING</a>
                    <a href="#">GUITAR</a>
                    <div id="indicator"></div>
                </nav>
            </div>
            : null }
        </>
    );
}

export default Bar;
