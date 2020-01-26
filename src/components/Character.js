import React from 'react';
import './style/Character.scss'

const Character = (props) => {
  const overAll = ((props.character.intelligence + props.character.strength + props.character.power + props.character.durability + props.character.combat + props.character.speed) / 6 ).toFixed()
    return (

    
        // <div id={ props.character.id } className="ui column">
        //         <div className="cards-list">
        //             <div className="card 2">
        //                 <div className="card_image">
        //                     <img id={ props.character.id } alt={props.character.name} src={props.character.image_url} onClick={ () => props.handleClick(props.character) } />
        //                 </div>
        //                 <div className="card_title title-white">
        //                     <p onClick={ (e) => props.handleClick(e) } >{props.character.name}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // ----------------------

//             <div className="content" className="ui column">
// <br />
//             <div className="card">
//                 <div className="firstinfo"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"/>
//                 <div className="profileinfo">
//                     <h1>Francesco Moustache</h1>
//                     <h3>Python Ninja</h3>
//                     <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
//                 </div>
//                 </div>
//             </div>
//             <div className="badgescard"> <span className="devicons devicons-django"></span><span className="devicons devicons-python"> </span><span className="devicons devicons-codepen"></span><span className="devicons devicons-javascript_badge"></span><span className="devicons devicons-gulp"></span><span className="devicons devicons-angular"></span><span className="devicons devicons-sass"> </span></div>
//             </div>

// ----------------------

<div id={ props.character.id } className="ui column">
<br/>
<br />
<div className="card">
  <div className="ds-top"></div>
  <div className="avatar-holder">
    <img src={ props.character.image_url } alt="Albert Einstein" />
  </div>
  <div className="name">
    <a  onClick={ () => props.handleClick(props.character) }>{ props.character.name }</a>
    <h6 title="Followers"><i className="fas fa-users"></i> <span className="followers">{ overAll }</span></h6>
  </div>
  <div className="button">
    <a href="#" className="btn" onmousedown="follow();">Follow <i className="fas fa-user-plus"></i></a>
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
