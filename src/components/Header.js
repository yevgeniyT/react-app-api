import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header flex-centered">
            <nav>
                <Link className="route" to='/'>Home</Link>
                <Link className="route" to='/create'>Create</Link>
            </nav>
        </header>
    );
}

export default Header;

