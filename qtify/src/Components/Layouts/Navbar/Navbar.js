import Button from "../Button/Button"
import SearchBar from "../SearchBar/SearchBar"
import {ReactComponent as Logo} from "../../../assets/logo.svg"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className = "navbar">
            <Logo />

            <SearchBar />

            <Button 
                text = "Give Feedback"
            />
        </nav>
    )
}