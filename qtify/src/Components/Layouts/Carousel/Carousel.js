import Card from "../Card/Card";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "./Carousel.css"

const Controls = ({cardsData, setIsBeginning, setIsEnd}) => {

    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0, 500);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }, [cardsData, swiper]);

    swiper.on('slideChange', () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    })
}

const Carousel = ({cardsData, type}) => {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(true);

    return(
        <div className="swiperContainer">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={40}
                className="carousel"
                initialSlide={0}
            >
                <Controls 
                    cardsData = {cardsData}
                    setIsBeginning = {setIsBeginning}
                    setIsEnd = {setIsEnd}
                />
            
                <PreviousButton 
                    isBeginning = {isBeginning}
                />

                <NextButton 
                    isEnd = {isEnd}
                />
                
                {
                    cardsData.map((cardData) => {
                        return (
                            <SwiperSlide key = {cardData.id}>
                                <Card 
                                    cardData = {cardData}
                                    type = {type}
                                />
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </div>
    );
}

export default Carousel;