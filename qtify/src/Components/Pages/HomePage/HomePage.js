import Navbar from "../../Layouts/Navbar/Navbar";
import HeroSection from "../../Layouts/HeroSection/HeroSection";
import AlbumSection from "../../Layouts/AlbumSection/AlbumSection";
import SongsSection from "../../Layouts/SongsSection/SongsSection";
import FAQ from "../../Layouts/FAQ/FAQ";

export default function HomePage(){
    return(

        <>
            <Navbar />
            
            <HeroSection />

            <AlbumSection 
                category = "top"
            />
            
            <AlbumSection
                category = "new"
            />

            <SongsSection />

            <FAQ />

        </>
    )
}