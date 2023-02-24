import CharactersList from './CharactersList';

const Home = ({ data }) => {
    return (
        <section className='home'>
            <div class="container">
                <div class="portal"></div>
                <div class="title">Rick<span>and </span>Morty</div>
                <div class="title middle"> Rick<span>and </span>Morty</div>
                <div class="title bottom"> Rick<span>and </span>Morty</div>
            </div>
            {data && <CharactersList data={data} />}
        </section>);
}

export default Home;