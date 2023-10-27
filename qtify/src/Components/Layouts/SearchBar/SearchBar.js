import {ReactComponent as SearchIcon} from "../../../assets/Search icon.svg"
import "./SearchBar.css"

export default function SearchBar(){
    return(
        <div className = "searchBar">
            <input
                type = "text"
                name = "search"
                placeholder = "Search a album of your choice"
            />

            <button className = "searchButton">
                <SearchIcon />
            </button>
        </div>
    )
}