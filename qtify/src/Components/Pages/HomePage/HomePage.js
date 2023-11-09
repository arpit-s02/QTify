import Navbar from "../../Layouts/Navbar/Navbar";
import HeroSection from "../../Layouts/HeroSection/HeroSection";
import AlbumSection from "../../Layouts/AlbumSection/AlbumSection";
import SongsSection from "../../Layouts/SongsSection/SongsSection";

export default function HomePage(){
    return(

        <div>
            <Navbar />
            
            <HeroSection />

            <AlbumSection 
                category = "top"
            />
            
            <AlbumSection
                category = "new"
            />

            <SongsSection />

        </div>
    )
}