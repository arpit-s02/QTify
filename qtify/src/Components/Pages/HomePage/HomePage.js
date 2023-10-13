import Navbar from "../../Layouts/Navbar/Navbar";
import HeroSection from "../../Layouts/HeroSection/HeroSection";
import Card from "../../Layouts/Card/Card";

export default function HomePage(){
    return(

        <div>
            <Navbar />
            <HeroSection />
            <Card 
                title = "New Bollywood"
                followers = {100}
                img = {"/Images/rectangle.png"}
            />
        </div>
    )
}