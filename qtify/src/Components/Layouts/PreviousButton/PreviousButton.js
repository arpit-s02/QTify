import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from "../../../assets/leftArrow.svg"
import "./PreviousButton.css"
import { useEffect, useState } from "react";

const PreviousButton = ({isBeginning}) => {
   
    const swiper = useSwiper();

    return(
        <>
            {!isBeginning && (
                <LeftArrow 
                    className="prevButton"
                    onClick={() => swiper.slidePrev()}
                />
            )}
        </>
    )
}

export default PreviousButton;