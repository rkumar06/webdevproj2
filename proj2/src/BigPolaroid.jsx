import React from "react"

function BigPolaroid(props){
    return (
        <div className="big-polaroid-background">
            <div className = "big-polaroid-text">
                <h2 style={{ backgroundColor: "white" }}>{props.name}</h2>
                <h3 style={{ backgroundColor: "white" }}>{props.bio}</h3>
                <img src= {props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default BigPolaroid