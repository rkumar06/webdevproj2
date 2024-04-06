import React from "react"
import Polaroid from "./Polaroid"
import BigPolaroid from "./BigPolaroid"
import memberData from "./memberData.json"
import { nanoid } from 'nanoid';
import './style.css'


function Members(){
    // const memberInfo = [{name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}, {name: "name", bio: "bio", img: "img"}]
    const memberInfo = memberData.map((mem, index) => ({ key: nanoid(), name: mem.name, bio: mem.bio, pronoun: mem.pronouns, image: mem.img, ind: index, major: mem.majorsminors, semBerk: mem.semesterInBerkeley, semNote: mem.semesterInNoteworthy, interests: mem.interests}));
    const memberPolaroids = memberInfo.map(member => <Polaroid name = {member.name} bio = {member.bio} onClick = {handlePolaroidClicked} pronoun = {member.pronoun} image = {member.image} key = {member.key} ind = {member.ind} major ={member.major} interests = {member.interests}/>)
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
            <div className = "member-music-top">
                <img className = "member-top-music-note" src = "./music_notes/orange_double.png"/>
                <img className = "member-top-music-note"src = "./music_notes/teal_single.jpeg"/>
            </div>
            <div className="members-polaroids">
                {isBig ? <BigPolaroid maxIndex = {memberInfo.length} major = {memberInfo[bigIndex].major} index = {bigIndex} leftFunction = {handleLeftClick} rightFunction = {handleRightClick} xFunction = {handleX} name = {memberInfo[bigIndex].name} semNote = {memberInfo[bigIndex].semNote} interests = {memberInfo[bigIndex].interests     } semBerk = {memberInfo[bigIndex].semBerk} bio = {memberInfo[bigIndex].bio} image = {memberInfo[bigIndex].image}/> : memberPolaroids}
            </div>

            <div className = "member-music-bottom">
                <img className="member-music-note-single" src = "./music_notes/pink_single.jpeg"/>
                <img className="member-music-note-double" src = "./music_notes/teal_double.jpeg"/>
                <img className="member-music-note-single music-rotate-15" src = "./music_notes/orange_single.png"/>
                <img className="member-music-note-single music-rotate-10-neg" src = "./music_notes/teal_single.jpeg"/>
                <img className="member-music-note-double music-rotate-30" src = "./music_notes/pink_double.jpeg"/>
            </div>

        </div>
    )
}

export default Members