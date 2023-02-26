import { Link } from "react-router-dom";

const SearchNotFound = () => {

    return (
        <section className="search-not-found flex-centered">
            <p>We don't have such character yet...</p>
            <div className='footer-left flex-centered'>
                <Link to="/create" className="create__then">Create then!</Link>
            </div>
        </section>
    );
}

export default SearchNotFound;

