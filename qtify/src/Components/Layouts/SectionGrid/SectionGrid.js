import Card from "../Card/Card";
import "./SectionGrid.css";

export default function SectionGrid({cardsData, type}){
    return(
        <div className="sectionGrid">
            {
                cardsData.map((cardData) => {
                    return (
                        <Card
                            key = {cardData.id}
                            cardData = {cardData}
                            type = {type}
                        />
                    )
                })
            }
        </div>
    );
}