import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Carousel.css";

export default function Carousel(){

    const [albums, setAlbums] = useState([]);

    const fetchAlbums = async () => {

        try {
            const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');

            return response.data;
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            const data = await fetchAlbums();

            setAlbums(data);
        })();
    }, []);

    return(
        <div className="carousel">
                <div className="carouselHeader">
                    <p className="albumName">Top Albums</p>
                    <p className="toggleButton">Collapse</p>
                </div>

                <div className="albums">
                    {
                        albums.map((album) => {
                            return (
                                <Card
                                    key = {album.id}
                                    title = {album.title}
                                    followers={album.follows}
                                    img={album.image}
                                />
                            )
                        })
                    }
                </div>
        </div>
    );
}