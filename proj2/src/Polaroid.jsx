import React from "react"
import './style.css'

function Polaroid(props){
    return (
        <div>
            <h3>{props.img}</h3>
            <h3>{props.name}</h3>
            <h4>{props.bio}</h4>
        </div>
    
    )
}

export default Polaroid