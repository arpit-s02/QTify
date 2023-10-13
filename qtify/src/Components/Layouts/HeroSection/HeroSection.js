import VibratingHeadphone from "../VibratingHeadphone/VibratingHeadphone"
import "./HeroSection.css"

export default function HeroSection(){
    return(
        <section className = "heroSection">
            <div className = "heroContent">
                <div className = "heroText">
                    <p> 100 Thousand Songs, ad-free </p>
                    <p> Over thousands podcast episodes </p>
                </div>

                <VibratingHeadphone />
            </div>
        </section>
    )
}