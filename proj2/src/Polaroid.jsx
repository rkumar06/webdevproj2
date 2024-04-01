import React from "react"
import './style.css'


function Polaroid(props){
    const shortenedBio = props.bio.substring(0, 35);
    // console.log(props.ind)
    return (
        <div className="polaroid-container">
            <div className="polaroid" onClick = {()=>props.onClick(props.ind)}>
                <div className="polaroid-img-container">
                    <img className = "polaroid-img"src= {props.image} alt={props.name} />
                </div>
                <h3 style={{ backgroundColor: "white" }}>{props.name}</h3>
                <h4 style={{ backgroundColor: "white" }}>{props.pronoun}</h4>
                <h5 style={{ backgroundColor: "white" }}>{`${shortenedBio}...`}</h5>
            </div>
        </div>
    )
}

export default Polaroid