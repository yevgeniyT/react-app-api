import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header flex-centered">
            <div className="search-bar">Search Bar Dummy Content</div>
            <nav>
                <Link className="route" to='/'>Home</Link>
                <Link className="route" to='/create'>Create</Link>
            </nav>
        </header>
    );
}

export default Header;

