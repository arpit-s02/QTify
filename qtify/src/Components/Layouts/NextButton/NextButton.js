import { useSwiper } from "swiper/react"
import {ReactComponent as RightArrow} from "../../../assets/rightArrow.svg"
import "./NextButton.css"
import { useEffect, useState } from "react";

export default function NextButton({isEnd}){

    const swiper = useSwiper();

    return(
        <>
            {!isEnd && (
                <RightArrow 
                    className="nextButton"
                    onClick={() => swiper.slideNext()}
                />
            )}
        </>
    )
}