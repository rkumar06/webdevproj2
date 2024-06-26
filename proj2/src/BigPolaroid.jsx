import React from "react"

function BigPolaroid(props) {

    console.log(props.major)
    return (
        <div className="card-wrapper">
            {props.index > 0 ? <div className="arrow left-arrow" onClick={props.leftFunction}>&#9664;</div> : <div className="left-end-arrow">&#9664;</div>}
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
                        <br/>
                        <p className="card-bio"><b>Majors & Minors: </b>{props.major}</p>
                        <p className="card-bio"><b>Semester in Berkeley: </b>{props.semBerk}</p>
                        <p className="card-bio"><b>Semester in Noteworthy: </b>{props.semNote}</p>
                        <p className="card-bio"><b>Interests: </b>{props.interests}</p>
                    </div>
                </div>
            </div>
            {props.index < props.maxIndex - 1 ? <div className="arrow right-arrow" onClick={props.rightFunction}>&#9654;</div> : <div className="right-end-arrow">&#9654;</div>}
        </div>
    );
}

export default BigPolaroid