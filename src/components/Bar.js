import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/bar.scss'

const Bar = (props) => {
    console.log(props)
    return (
        <Link>
        { props.token ? 
            // <div className="all">
            // <div className="lefter">
            //   <div className="text">Hosting</div>
            // </div>
            // <div className="left">
            //   <div className="text">Web Design</div>
            // </div>
            // <div className="center">
            //   <div className="explainer"><p>Hover me</p></div>
            //   <div className="text">Frontend Development</div>
            //   </div>
            // <div className="right">
            //   <div className="text">Backend Development</div>
            // </div>
            // <div className="righter">
            //   <div className="text">SEO</div>
            // </div>
            // </div>
            
            <div><p>g</p></div>
            : null }
        </Link>
    );
}

export default Bar;
