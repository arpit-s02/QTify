import Navbar from "../../Layouts/Navbar/Navbar";
import HeroSection from "../../Layouts/HeroSection/HeroSection";
import Carousel from "../../Layouts/Carousel/Carousel";

export default function HomePage(){
    return(

        <div>
            <Navbar />
            
            <HeroSection />

            <Carousel />
        </div>
    )
}