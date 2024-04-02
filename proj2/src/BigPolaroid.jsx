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
                    <div className = "card-x">
                        <h2>x</h2>
                    </div>
                    <h1 className="card-name">{props.name}</h1>
                     <p className="card-bio">{props.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default BigPolaroid