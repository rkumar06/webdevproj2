import React from "react"
import Polaroid from "./Polaroid"
import './style.css'


function Members(){
    const memberInfo = [{Name: "test 1", Desc: "bio", Img: "img"}, {Name: "test 1", Desc: "bio", Img: "img"}, {Name: "test 1", Desc: "bio", Img: "img"}]
    return (
        <Polaroid 
            name = "name"
            bio = "bio"
            img = "img"/>
    )
}

export default Members