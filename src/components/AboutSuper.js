import React from 'react';
import '../styles/about.css'

const AboutSuper = (props) => {
    const char = props.superDetails
    const type = props.superDetails.alignment
    const powerLevel = Math.round((char.intelligence + char.strength + char.speed + char.durability + char.power + char.combat) / 6)

    return (
        <>
        <div className="about-section">
            <h1>{char.name}</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 style={{textAlign: "center"}}>{ char.occupation }</h2>
            <div className="row">
            <div className="column">
                <div className="card">
                <img src='https://i.pinimg.com/originals/a7/e3/52/a7e3528cebe7a13453ef0b49c0610ef9.gif' alt="Jane" style={{width: "100%", height: '13rem'}}/>
                <div className="container">
                    <h2>{ type === 'good' ? 'Hero' : 'Villian' } Stats</h2>
                    <p className="title">Power-level { powerLevel }</p>
                    <div className="char-stats">
                        <p>Intelligence: { char.intelligence }</p>
                        <p>Strength: { char.strength }</p>
                        <p>Speed: { char.speed }</p>
                        <p>Durability: { char.durability }</p>                
                        <p>Power: { char.power }</p>
                        <p>Combat: { char.combat }</p>
                    </div>
                </div>
                </div>
                <p><button onClick={ props.editSuper } class="button">Edit This { type === 'good' ? 'Hero' : 'Villian' }</button></p>
            </div>

            <div className="column">
                <div className="card">
                <img src={ char.image_url ? char.image_url : "https://static.thenounproject.com/png/770826-200.png" } alt="Mike" style={{ maxHeight: '40rem'}} />
            
                </div>
            </div>
            
            <div className="column">
                <div className="card">
                <img src="https://i.imgur.com/5G4YKRZ.gif" alt="John" style={{width: "100%"}}/>
                <div className="container">
                    <div classname="char-info">
                        <h2>Race: { char.race }</h2>
                        <p className="title">Real Name: { char.rname }</p>
                        <p>Birth-place { char.place_of_birth }</p>
                        <p>Eye color: { char.eye_color }</p>
                        <p>Hair color: { char.hair_color }</p>
                        <p>Height: { char.height_feet } ft/ { char.height_meters } cm</p>
                        <p>Weight: { char.weight_lbs } ibs/ { char.weight_kgs } kg</p>
                        <p>Relatives - { char.relatives }</p>
                    </div>
                </div>
                </div>
                <p><button onClick={ () => props.deleteSuper(char) } class="button">Delete This { type === 'good' ? 'Hero' : 'Villian' }</button></p>
            </div>
            </div>
            </>
    );
}

export default AboutSuper;
