import {ReactComponent as VibratingHeadphone} from "../../../assets/vibrating-headphone.svg"
import "./HeroSection.css"

export default function HeroSection(){
    return(
        <section className = "heroSection">
            <div className = "heroText">
                <p> 100 Thousand Songs, ad-free </p>
                <p> Over thousands podcast episodes </p>
            </div>

            <div>
                <VibratingHeadphone />
            </div>
        </section>
    )
}