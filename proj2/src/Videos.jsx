import React from "react"

function Videos(){
    return (
        <div className="videos-page">
            <div className="members-title">
                <h1>Videos</h1>
            </div>
            <div className="videos-body">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cDjY-1WuB3o?si=uaE3OVfeSOaxRBW-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Videos