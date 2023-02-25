
const SearchNotFound = () => {

    const handleClick = () => {
        console.log('supposed to go back');
    }

    return ( 
        <section className="search-not-found flex-centered">
            <p>We don't have such character yet...</p>
            <button onClick={handleClick} className="go-back">Go back</button>
        </section>
     );
}
 
export default SearchNotFound;