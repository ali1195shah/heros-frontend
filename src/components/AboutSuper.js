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
            <h2 style={{textAlign: "center"}}>Full Name: { char.full_name }</h2>
            <div className="row">
            <div className="column">
                <div className="card">
                <img src='https://i.pinimg.com/originals/a7/e3/52/a7e3528cebe7a13453ef0b49c0610ef9.gif' alt="Jane" style={{width: "100%"}}/>
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
            </div>

            <div className="column">
                <div className="card">
                <img src="/w3images/team2.jpg" alt="Mike" style={{width: "100%"}}/>
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>
            
            <div className="column">
                <div className="card">
                <img src="/w3images/team3.jpg" alt="John" style={{width: "100%"}}/>
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>john@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>
            </div>
            </>
    );
}

export default AboutSuper;
