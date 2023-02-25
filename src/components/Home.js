import CharactersList from './CharactersList';

const Home = ({ data, onDeleteCharacter }) => {

const getId = (id) => {
    onDeleteCharacter(id)
}

    return (
        <section className='home'>
            <div className="container">
                <div className="portal"></div>
                <div className="title">Rick<span>and </span>Morty</div>
                <div className="title middle"> Rick<span>and </span>Morty</div>
                <div className="title bottom"> Rick<span>and </span>Morty</div>
            </div>
            {data && <CharactersList data={data} getIdHome = {getId}/>}
        </section>);
}

export default Home;