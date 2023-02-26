import { useState, useEffect } from 'react';
import CharactersList from './CharactersList';
import { SearchNotFound } from '../components/handlers';
import SearchBar from './SearchBar'

const Home = ({ data, onDeleteCharacter }) => {

    const getId = (id) => {
        onDeleteCharacter(id)
    }

    const [characters, setCharacters] = useState(data);
    const [found, setFound] = useState(true);
    
    useEffect(() => {
        setCharacters(data);
    }, [data]);

    const onSearch = (foundCharacters) => {
        if (foundCharacters.length > 0) {
            setCharacters(foundCharacters);
            setFound(true);
        } else if (foundCharacters.length === 0) {
            setFound(false);
        }
    }

    return (
        <section className='home'>
            <div className="search-bar">
                {characters && <SearchBar data={data} handler={onSearch} />}
            </div>
            <div className="container">
                <div className="portal"></div>
                <div className="title">Rick<span>and </span>Morty</div>
                <div className="title middle"> Rick<span>and </span>Morty</div>
                <div className="title bottom"> Rick<span>and </span>Morty</div>
            </div>
            {!found ? <SearchNotFound /> : ''}
            {(characters && found) && <CharactersList data={characters} getIdHome={getId} />}
        </section>

    );
}

export default Home;