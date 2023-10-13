import FeedbackButton from "../FeedbackButton/FeedbackButton"
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className = "navbar">
            <Logo />

            <SearchBar />

            <FeedbackButton />
        </nav>
    )
}