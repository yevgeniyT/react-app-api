import CharactersList from './CharactersList';

const Home = ({ data }) => {
    return (
        <section className='home'>
            <div className="container">
                <div className="portal"></div>
                <div className="title">Rick<span>and </span>Morty</div>
                <div className="title middle"> Rick<span>and </span>Morty</div>
                <div className="title bottom"> Rick<span>and </span>Morty</div>
            </div>
            {data && <CharactersList data={data} />}
        </section>);
}

export default Home;