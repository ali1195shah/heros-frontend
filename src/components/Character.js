import React from 'react';
import './style/Character.scss'

const Character = (props) => {

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

<div className="ui column">
<br/>
<br />
<div class="card">
  <div class="ds-top"></div>
  <div class="avatar-holder">
    <img onClick={ () => props.handleClick(props.character) } src={ props.character.image_url } alt="Albert Einstein" />
  </div>
  <div class="name">
    <a href="https://codepen.io/AlbertFeynman/" target="_blank">Albert Feynman</a>
    <h6 title="Followers"><i class="fas fa-users"></i> <span class="followers">90</span></h6>
  </div>
  <div class="button">
    <a href="#" class="btn" onmousedown="follow();">Follow <i class="fas fa-user-plus"></i></a>
  </div>
  <div class="ds-info">
    <div class="ds pens">
      <h6 title="Number of pens created by the user">{props.character.place_of_birth} <i class="fas fa-edit"></i></h6>
      <p>29</p>
    </div>
    <div class="ds projects">
      <h6 title="Number of projects created by the user">{ props.character.alignment === 'good' ? 'Hero' : "Villain" } <i class="fas fa-project-diagram"></i></h6>
      <p>0</p>
    </div>
    <div class="ds posts">
      <h6 title="Number of posts">{props.character.publisher} <i class="fas fa-comments"></i></h6>
      <p>0</p>
    </div>
  </div>
  <div class="ds-skill">
    <h6>Skill <i class="fa fa-code" aria-hidden="true"></i></h6>
    <div class="skill html">
      <h6><i class="fab fa-html5"></i> HTML5 </h6>
      <div class="bar bar-html">
        <p>95%</p>
      </div>
    </div>
    <div class="skill css">
      <h6><i class="fab fa-css3-alt"></i> CSS3 </h6>
      <div class="bar bar-css">
        <p>90%</p>
      </div>
    </div>
    <div class="skill javascript">
      <h6><i class="fab fa-js"></i> JavaScript </h6>
      <div class="bar bar-js">
        <p>5%</p>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Character;
