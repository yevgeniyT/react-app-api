import CharactersList from './CharactersList';

const Home = ({ data }) => {
    return (
        <section className='home'>
            <h1> Welcome to Rick and Morty Universe </h1>
            {data && <CharactersList data={data} />}
        </section>);
}

export default Home;
