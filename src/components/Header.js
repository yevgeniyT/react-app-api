import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="search-bar"></div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/create'>Create</Link>
            </nav>
        </header>
    );
}
 
export default Header;

