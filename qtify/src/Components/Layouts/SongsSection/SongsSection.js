import Carousel from "../Carousel/Carousel";
import GenreSelector from "../GenreSelector/GenreSelector"
import { useState, useEffect } from "react";
import { config } from "../../../config";
import axios from "axios";
import "./SongsSection.css"

export default function SongsSection(){

    const [cardsData, setCardsData] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");

    const fetchCardsData = async () => {
        try {
            const response = await axios.get(`${config.endpoint}/songs`);
            return response.data;
            
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    useEffect(() => {

        (async () => {
            const data = await fetchCardsData();
            setCardsData(data);
        })();

    }, []);

    const getGenreSongs = (cardsData, selectedGenre) => {
        if(selectedGenre === ""){
            return cardsData;
        }

        const genreSongs = cardsData.filter((item) => item.genre.key === selectedGenre);

        return genreSongs;
    }

    const genreSongs = getGenreSongs(cardsData, selectedGenre);

    return (
        <div className="songsSection">
            <div className="header">
                <p className="heading">Songs</p>
            </div>

            <GenreSelector 
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
            />

            <Carousel 
                cardsData = {genreSongs}
                type = "songs" 
            />
        </div>
    )
}