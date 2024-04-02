import React from "react"

function BigPolaroid(props){
    return (
        <div className="card-container">
            <div className="card">
                <div
                    className="card-image"
                    style={{ backgroundImage: `url(${props.image})` }}
                />
                <div className="card-text">
                    <h1 className="card-name">{props.name}</h1>
                     <p className="card-bio">{props.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default BigPolaroid