import React from "react"
import './style.css'


function Polaroid(props){
    const shortenedBio = props.bio.substring(0, 68);
    // console.log(props.ind)
    return (
        <div className="polaroid-container">
            <div className="polaroid" onClick = {()=>props.onClick(props.ind)}>
                <div className="polaroid-img-container">
                    <img className = "polaroid-img"src= {props.image} alt={props.name} />
                </div>
                <h3 className="polaroid-name">{props.name}</h3>
                <h4 className="polaroid-pronouns">{props.pronoun}</h4>
                <h5 className="polaroid-bio">{`${shortenedBio}...`}</h5>
            </div>
        </div>
    )
}

export default Polaroid