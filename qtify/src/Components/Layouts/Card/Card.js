import { Tooltip } from "@mui/material"
import "./Card.css"

export default function Card({cardData, type}){
    return(
        <Tooltip 
            title = {(type === "album") ? `${cardData.songs.length} songs` : ""}
            placement="top" 
            arrow
        >
            <div className = "card">
                <div className="cardImageContainer">
                    <img src = {cardData.image} alt = {cardData.title} />

                    <div className="imageFooter">
                        <span className="followersNumber">
                            {(type === "album") ? `${cardData.follows} follows` : `${cardData.likes} likes`}
                        </span>
                    </div>
                </div>
                <p className="cardTitle">
                    {cardData.title}
                </p>
            </div>
        </Tooltip>
    )
}