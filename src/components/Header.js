import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="search-bar"></div>
            <nav>
                <Link className="route" to='/'>Home</Link>
                <Link className="route" to='/create'>Create</Link>
            </nav>
        </header>
    );
}

export default Header;