import CharactersList from './CharactersList';
import { SearchNotFound } from './handlers';

const Home = ({ data, onDeleteCharacter, found}) => {

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
            {!found ? <SearchNotFound /> : ''}
            {(data && found) && <CharactersList data={data} getIdHome={getId} />}
        </section>);
}

export default Home;