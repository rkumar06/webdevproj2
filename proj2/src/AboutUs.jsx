import React from "react"


function AboutUs() {
    //"./memberImages/alex.jpg"
    const flyer_links = ['./flyers/audition.jpg','./flyers/halloween.png', './flyers/nw_show.png', './flyers/road_heist.png', './flyers/welcome_sp23.png', './flyers/welcome_sp24.png', './flyers/west_coast.jpg']
    const [flyer_index, set_flyer_index] = React.useState(0)

    function handleLeft() {
        if (flyer_index == 0) {
            set_flyer_index(flyer_links.length - 1)
        }
        else {
           set_flyer_index(lastIndex => lastIndex - 1) 
        } 
    }

    function handleRight() {
        if (flyer_index == flyer_links.length - 1) {
            set_flyer_index(0)
        }
        else {
           set_flyer_index(lastIndex => lastIndex + 1) 
        } 
    }
    
    return (
        <div className = "aboutus-page">
            <div className="members-title">
                <h1>About Us</h1>
            </div>

            <div className = "about-all-content">

                <h3>Learn more about us and book us for your events! </h3>
                <br/>
                <h3 className="about-title">Who We are</h3>
                <p>blah blah blah</p>
                <p>blah blah blah</p>

                <div className = "about-events-flyers">
                    <div className = "about-events-text">
                        <h3 className = "about-title">Events</h3>
                        <p className = "about-event-text">We organize Welcome Back to A Cappella, Cal’s a cappella orientation, at the beginning of every semester. Hundreds of students turn out to hear 13+ a cappella groups perform. The show is always fun, and we hope you’ll come!</p>
                    </div>
                    <div className = "about-flyers">
                        <div onClick = {handleLeft} className="arrow left-arrow">&#9664; </div>
                            <img className = "about-each-flyer" src = {flyer_links[flyer_index]} />
                        <div onClick = {handleRight} className="arrow right-arrow">&#9654; </div>
                    </div>
                </div>


                <div className = "about-hire-us">
                    <div className = "about-hire-us-title">
                        <h3 className = "about-title">Hire Us</h3>
                    </div> 
                    <div className = "about-hire-us-pic-paragraph">
                        <img className = "about-hire-us-pic" src = "./src/images/hire-us-pic.jpg" />
                        <p className = "about-hire-us-text">We’re no stranger to weddings, private parties, tailgates, and conferences. We’ve performed at venues including San Francisco City Hall, University House, the Faculty Club, and UC Berkeley’s 2022 Commencement.</p>
                    </div>
                    

                </div>
                <div className = "about-instagram">
                    <div className = "about-insta-title">
                        <h3 className = "about-title">Follow Us</h3>
                    </div>
                    <div className = "insta-embed">

                    </div>

                </div>

            </div>
        

        </div>
    )
}

export default AboutUs