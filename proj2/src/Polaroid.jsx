import React from "react"
import './style.css'

function Polaroid(props){
    const shortenedBio = props.bio.substring(0, 35);
    console.log(props.pronoun)
    return (
        <div className="polaroid-container">
            <div className="polaroid" onClick = {props.onClick}>
                <div className="polaroid-img-container">
                    <h3 className="polaroid-img">{props.img}</h3>
                </div>
                <h3 style={{ backgroundColor: "white" }}>{props.name}</h3>
                <h4 style={{ backgroundColor: "white" }}>{props.pronoun}</h4>
                <h5 style={{ backgroundColor: "white" }}>{`${shortenedBio}...`}</h5>
            </div>
        </div>
    )
}

export default Polaroid