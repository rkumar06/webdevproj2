import React from "react"

function BigPolaroid(props) {
    return (
        <div className="card-wrapper">
            <div className="arrow left-arrow" onClick={props.leftFunction}>&#9664;</div>
            <div className="card-container">
                <div className="card">
                    <div
                        className="card-image"
                        style={{ backgroundImage: `url(${props.image})` }}
                    />
                    <div className="card-text">
                        <div className="card-x">
                            <h2 onClick={props.xFunction}>x</h2>
                        </div>
                        <h1 className="card-name">{props.name}</h1>
                        <p className="card-bio">{props.bio}</p>
                    </div>
                </div>
            </div>
            <div className="arrow right-arrow" onClick={props.rightFunction}>&#9654;</div>
        </div>
    );
}

export default BigPolaroid