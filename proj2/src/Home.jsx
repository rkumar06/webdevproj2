import React from "react"
import './style.css'

function Home(){
    return (
        <div>
        <img src = "./src/images/HomePageImage.png"  alt = "home image" className = "home-image"/>
        <div className = "home-page">
            <img src = "./music_notes/pink_double.jpeg"/>
            <h1 className="home-page-title">Hi! We are NoteWorthy A Capella!</h1>
            <p className="home-paragraph">We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!
                <br/><br/>Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.</p>
        </div>
        </div>
    )
}

export default Home