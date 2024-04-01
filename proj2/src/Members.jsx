import React from "react"
import Polaroid from "./Polaroid"
import BigPolaroid from "./BigPolaroid"
import memberData from "./memberData.json"
import { nanoid } from 'nanoid';
import './style.css'


function Members(){
    // const memberInfo = [{name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}]
    const memberInfo = memberData.map(mem => ({ key: nanoid(), name: mem.name, bio: mem.bio, pronoun: mem.pronouns, image: mem.img}));
    const memberPolaroids = memberInfo.map(member => <Polaroid name = {member.name} bio = {member.bio} onClick = {handlePolaroidClicked} pronoun = {member.pronoun} image = {member.image} key = {member.key}/>)
    const [isBig, setBig] = React.useState(false)
    // console.log(memberName)

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