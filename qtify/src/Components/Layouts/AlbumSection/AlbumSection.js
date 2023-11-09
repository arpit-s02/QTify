import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./AlbumSection.css";
import {config} from "../../../config"
import SectionGrid from "../SectionGrid/SectionGrid";
import Carousel from "../Carousel/Carousel";

export default function AlbumSection({category}){

    const [cardsData, setCardsData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const fetchCardsData = async (category) => {
        try {
            const response = await axios.get(`${config.endpoint}/albums/${category}`);
            return response.data;
            
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    useEffect(() => {

        (async () => {
            const data = await fetchCardsData(category);
            setCardsData(data);
        })();

    }, [category]);

    return(
        <div className="albumSection">
            <div className="header">
                <p className="heading">
                    {`${category} Albums`}
                </p>

                <button 
                    className="toggleButton"
                    onClick = {() => setShowAll(!showAll)}
                >
                    {showAll ? ("Collapse") : ("Show all")}
                </button>
                
            </div>

            {showAll ? (
                <SectionGrid 
                    cardsData = {cardsData}
                    type = "album"
                />
            ) : (
                <Carousel 
                    cardsData = {cardsData}
                    type = "album"
                />
            )}

            
        </div>
    )
}