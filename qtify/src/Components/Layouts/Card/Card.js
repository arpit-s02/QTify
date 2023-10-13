import "./Card.css"

export default function Card({title, followers, img}){
    return(
        <div className = "card">
            <div className="cardImageContainer">
                <img src = {img} alt = {title} />

                <div className="followersContainer">
                    <span className="followersNumber">{followers} Follows</span>
                </div>
            </div>
            <span className="cardTitle">
                {title}
            </span>
        </div>
    )
}