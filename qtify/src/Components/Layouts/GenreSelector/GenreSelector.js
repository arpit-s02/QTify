import { useEffect, useState } from "react";
import axios from "axios";
import {config} from "../../../config"
import { useSwiper } from "swiper/react";
import "./GenreSelector.css"

export default function GenreSelector({selectedGenre, setSelectedGenre}){
    const [genres, setGenres] = useState([]);

    const fetchGenres =  async () => {
        try {
            const response = await axios.get(`${config.endpoint}/genres`);

            return response.data.data;
        } catch (error) {
            console.error(error);

            return [];
        }
    }

    useEffect(() => {
        (async () => {
            const data = await fetchGenres();
            setGenres(data);
        })();
    }, []);


    return (
        <div className="genreContainer">
            <button 
                className={(selectedGenre === "") ? "genreButton selectedGenre" : "genreButton"}
                onClick={() => setSelectedGenre("")}
            >
                All
            </button>
            
            {
                genres.map((genre) => {
                    return (
                        <button 
                            key={genre.key}
                            className={(selectedGenre === genre.key) ? "genreButton selectedGenre" : "genreButton"}
                            onClick={() => {
                                setSelectedGenre(genre.key);
                            }}
                        >
                            {genre.label}
                        </button>
                    )
                })
            }
        </div>
    )
}