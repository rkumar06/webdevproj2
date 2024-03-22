import React from "react"
import './style.css'

function Polaroid(props){
    return (
        <div className = "polaroid-container">
            <div className="polaroid">
                <h3>{props.img}</h3>
                <h3>{props.name}</h3>
                <h4>{props.bio}</h4>
            </div>
        </div>
    
    )
}

export default Polaroid