import React from 'react';
import './style/Character.scss'

const Character = (props) => {
  const overAll = ((props.character.intelligence + props.character.strength + props.character.power + props.character.durability + props.character.combat + props.character.speed) / 6 ).toFixed()
    return (
      <div id={ props.character.id } className="ui column">
      <br/>
      <br />
      <div className="card">
        <div className="ds-top"></div>
        <div className="avatar-holder">
          <img src={ props.character.image_url } alt="Albert Einstein" />
        </div>
        <div className="name">
          <a>{ props.character.name }</a>
          <h6 title="Followers"><i className="fas fa-users"></i> <span className="followers">{ overAll }</span></h6>
        </div>
        <div className="button">
          <a onClick={ () => props.handleClick(props.character) } className="btn">More Intel <i className="fas fa-user-plus"></i></a>
        </div>
        <div className="ds-info">
          <div className="ds pens">
            <h6 title="Number of pens created by the user">{props.character.publisher} <i className="fas fa-edit"></i></h6>
            <p>29</p>
          </div>
          <div className="ds projects">
            <h6 title="Number of projects created by the user">{ props.character.alignment === 'good' ? 'Hero' : "Villain" } <i className="fas fa-project-diagram"></i></h6>
            <p>0</p>
          </div>
          <div className="ds posts">
            <h6 title="Number of posts">{props.character.place_of_birth} <i className="fas fa-comments"></i></h6>
            <p>0</p>
          </div>
        </div>
        <div className="ds-skill">
          <h6>Skill <i className="fa fa-code" aria-hidden="true"></i></h6>
          <div className="skill html">
            <h6><i className="fab fa-html5"></i>Intelligence</h6>
            <div className="bar bar-html" style={{width: `${ props.character.intelligence }%`}}>
              <p>{props.character.intelligence}</p>
            </div>
          </div>
          <div className="skill css">
            <h6><i className="fab fa-css3-alt"></i>Strength</h6>
            <div className="bar bar-css" style={{width: `${ props.character.strength }%`}}>
              <p>{ props.character.strength }</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><i className="fab fa-js"></i>Speed</h6>
            <div className="bar bar-js" style={{width: `${ props.character.speed }%`}}>
              <p>{ props.character.speed }</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><i className="fab fa-js"></i>Speed</h6>
            <div className="bar bar-js" style={{width: `${ props.character.durability }%`}}>
              <p>{ props.character.durability }</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><i className="fab fa-js"></i>Power</h6>
            <div className="bar bar-js" style={{width: `${ props.character.power }%`}}>
              <p>{ props.character.power }</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><i className="fab fa-js"></i>Combat</h6>
            <div className="bar bar-js" style={{width: `${ props.character.combat }%`}}>
              <p>{ props.character.combat }</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      </div>

    );
}

export default Character;
