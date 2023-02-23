import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
    const { character } = props;

    return (
        <article className="character">
            <Link to={`/characters/${character.id}`}>
                <img className="character__img" src={character.image} alt="Rick and Morty" />
                <div className="character__details">
                    <h4 className="character__name">{character.name}</h4>
                    <p className="character__status">Status: {character.status}</p>
                    <p className="character__species">Species: {character.species}</p>
                    <p className="character__origin">Origin: {character.origin.name}</p>
                </div>
            </Link>
        </article>
    );
}

export default Character;