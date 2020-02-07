import React from 'react';

const RamdomSuper = (props) => {
    return (
        <div>

        {props.character ? 
<div> 
<center><img alt={ props.character.name } src={ props.character.image_url } style={{width: "250px", height: "350px"}} /></center>
<center>
    {/* { props.character.alignment === 'good' ? <h1>Hero Name: { props.character.name }</h1> : <h1>Villain Name: { props.character.name } </h1>} */}
    </center>
<center>
    <ul>
        <li>Real Name: { props.character.full_name }</li>
        <li>Aliases: { props.character.aliases}</li>
        <li>Birth place: { props.character.place_of_birth }</li>
        <li>Gender: { props.character.gender }</li>
        <li>Race: { props.character.race }</li>
        <li>Eye color: { props.character.eye_color }</li>
        <li>Hair color: { props.character.hair_color }</li>
        <li>Intelligence: { props.character.intelligence }</li>
        <li>Strength: { props.character.strength }</li>
        <li>Speed: { props.character.speed }</li>
        <li>Durability: { props.character.durability }</li>
        <li>Power: { props.character.power }</li>
        <li>Combat: { props.character.combat }</li>
        <li>Height: { props.character.height_feet}</li>
        <li>Relatives: { props.character.relatives }</li>
        <li>Occupation: { props.character.occupation }</li>
        <li>Group Affiliation: { props.character.group_affiliation }</li>
        
    </ul>
</center>


{/* <center>
    <button id={ props.character.id }>{ props.character.alignment === 'good' ? 'Edit this Hero' : 'Edit this Villain'}</button>
    &nbsp;&nbsp;
    <button id={ props.character.id } onClick={ deleteHero }>
        { props.character.alignment === 'good' ? 'Delete this Hero' : 'Delete this Villain'}
        </button>
    &nbsp;&nbsp;
    <button id={ props.character.id } onClick={ props.goBack } >Go Back</button>

</center> */}

{/* <div className="" style={{textAlign: "center", marginTop: '5%'}}>
<button className="icon-btn add-btn">
<div className="add-icon"></div>
<div className="btn-txt">Add</div>
</button>
</div>
<div className="" style={{textAlign: "center", marginTop: '8px'}}>
<button className="icon-btn add-btn">  
<div className="btn-txt">Remove</div>
</button>
</div> */}








</div>
            :
            <div>
                hi
            </div>    
    }
                   
                  
    </div>
    );
}

export default RamdomSuper;
