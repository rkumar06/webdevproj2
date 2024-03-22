import React from "react"
import Polaroid from "./Polaroid"
import BigPolaroid from "./BigPolaroid"
import './style.css'


function Members(){
    const memberInfo = [{name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}]
    const memberPolaroids = memberInfo.map(member => <Polaroid name = {member.name} bio = {member.bio} img = {member.img} />)
    const [isBig, setBig] = React.useState(false)

    function handleX() {
        setBig(false)
    }
    function handlePolaroidClicked(){
        setBig(true)
    }
    
    return (
        <div className = "members-page">
            {isBig ? <BigPolaroid/> : memberPolaroids}
        </div>
    )
}

export default Members