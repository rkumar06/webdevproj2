import React from "react"

function Videos(){
    const links = ["https://www.youtube.com/embed/QHqUXFsKwZQ?si=oTrwvxBRdKoK3Ba5&amp;controls=0", "https://www.youtube.com/embed/_EugT30D-6I?si=TyHLgZbrcE03_bKJ&amp;controls=0", "https://www.youtube.com/embed/oXAuWnz4WFU?si=6sLECsDe8bu30LSi&amp;controls=0", "https://www.youtube.com/embed/xP_L8_2eQr4?si=BqB_9IT2GsE4NGzK&amp;controls=0", "https://www.youtube.com/embed/7RPiGAzk4wA?si=1Yxg-ydzzgIpP78S&amp;controls=0", "https://www.youtube.com/embed/p_1oUZj3pCo?si=00S1kNsIrSFv4Z42&amp;controls=0", "https://www.youtube.com/embed/BotMIpK4XSg?si=AFypRRDn3ZHJn1f4&amp;controls=0", "https://www.youtube.com/embed/KZFrntXpisc?si=XzKwprbEZki6xAc6&amp;controls=0", "https://www.youtube.com/embed/X6Js9Wznqy0?si=8bARiSh_nnr9ti9A&amp;controls=0"]
    const [linksIndex, setLinksIndex] = React.useState(0)

    function handleLeft() {
        if (linksIndex == 0) {
            setLinksIndex(links.length - 1)
        }
        else {
           setLinksIndex(lastIndex => lastIndex - 1) 
        } 
    }

    function handleRight() {
        if (linksIndex == links.length - 1) {
            setLinksIndex(0)
        }
        else {
           setLinksIndex(lastIndex => lastIndex + 1) 
        } 
    }

    return (
        <div className="videos-page">
            <div className="members-title">
                <h1>Our Favorite Videos</h1>
            </div>


            <div className = "video-wrapper">
                <div onClick = {handleLeft} className="arrow left-arrow">&#9664; </div>
                    <div className="videos-body">
                        <iframe width="980" height="552" src= {links[linksIndex]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                         </div>
                <div onClick = {handleRight} className="arrow right-arrow">&#9654; </div>
            </div>



        </div>
    )
}

export default Videos