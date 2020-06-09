import React from 'react';
import '../styles/super.css'

const Super = (props) => {
    const char = props.character
    const powerLevel = Math.round((char.intelligence + char.strength + char.speed + char.durability + char.power + char.combat) / 6)
    return (
  <div key={ char.id } className="col-sm-8 col-lg-4 col-md-6">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" alt="pic" src={ char.image_url } style={{height: "130px"}}/>
        </div>
        <div className="team-content">
    <h3 className="name">{ char.id } { char.name }</h3>
            <h4 className="title">Power Level: { powerLevel }</h4>
        </div>
        <ul className="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fas fa-brain" aria-hidden="true"> { char.intelligence }</a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fas fa-dumbbell" aria-hidden="true"> { char.strength }</a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fas fa-bolt" aria-hidden="true"> { char.speed }</a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fas fa-mountain" aria-hidden="true"> { char.durability }</a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fas fa-meteor" aria-hidden="true"> { char.power }</a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fas fa-fist-raised" aria-hidden="true"> { char.combat }</a></li>
        </ul>
      </div>
      </div>

    );
}

export default Super;
