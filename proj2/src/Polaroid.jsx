import React from "react"
import './style.css'

function Polaroid(props){
    return (
        <div class="polaroid-container">
            <div class="polaroid">
                <div class="polaroid-img-container">
                    <h3 class="polaroid-img">{props.img}</h3>
                </div>
                <h3 style={{ backgroundColor: "white" }}>{props.name}</h3>
                <h4 style={{ backgroundColor: "white" }}>{props.bio}</h4>
            </div>
        </div>
    
    )
}

export default Polaroid