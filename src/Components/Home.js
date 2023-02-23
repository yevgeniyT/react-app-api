import useFetch from '../services/useFetch'


const Home = () => {
    // gonna display here CharactersList
    const { data, error, isPending } = useFetch();

    const renderData = data && data.results.map((character) => {
        return (
            <div key={character.id}>
                <h3>{character.name}</h3>
                <h3>{character.gender}</h3>
            </div>
        )
    })
    return (<div>
        <h1> Hello from home </h1>
        {isPending && <p>Loading data .....</p>}
        {error ? <p>{error}</p> : renderData}
    </div>);
}

export default Home;

