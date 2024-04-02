import React from "react"
import Polaroid from "./Polaroid"
import BigPolaroid from "./BigPolaroid"
import memberData from "./memberData.json"
import { nanoid } from 'nanoid';
import './style.css'


function Members(){
    // const memberInfo = [{name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}]
    const memberInfo = memberData.map((mem, index) => ({ key: nanoid(), name: mem.name, bio: mem.bio, pronoun: mem.pronouns, image: mem.img, ind: index}));
    const memberPolaroids = memberInfo.map(member => <Polaroid name = {member.name} bio = {member.bio} onClick = {handlePolaroidClicked} pronoun = {member.pronoun} image = {member.image} key = {member.key} ind = {member.ind}/>)
    const [isBig, setBig] = React.useState(false)
    const [bigIndex, setBigIndex] = React.useState(0)
    // console.log(memberName)

    function handleX() {
        setBig(false)
    }
    function handlePolaroidClicked(index){
        setBig(true)
        setBigIndex(index)
        console.log(index)
    }
    
    function handleRightClick(){
        setBigIndex(pastIndex => pastIndex + 1)
        console.log(bigIndex)
    
    }

    function handleLeftClick(){
        setBigIndex(pastIndex => pastIndex - 1)
        console.log(bigIndex)
    
    }
    
    return (
        <div className = "members-page">
            <div className="members-title">
                <h1>Members</h1>
            </div>
            <div className="members-polaroids">
                {isBig ? <BigPolaroid maxIndex = {memberInfo.length}index = {bigIndex} leftFunction = {handleLeftClick} rightFunction = {handleRightClick} xFunction = {handleX} name = {memberInfo[bigIndex].name} bio = {memberInfo[bigIndex].bio} image = {memberInfo[bigIndex].image}/> : memberPolaroids}
            </div>
        </div>
    )
}

export default Members