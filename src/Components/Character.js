import React from 'react';

const Character = (props) => {
    const { character } = props;
    return (
        <>
            <article className="character">
                <img className="character__img" src={character.results.image} alt="Rick and Morty" />
                <div className="character__details">
                    <h4 className="character__name">{character.results.name}</h4>
                    <p className="character__status">Status: ${character.results.status}</p>
                    <p className="character__species">Species: {character.results.species}</p>
                    <p className="character__origin">Origin: {character.results.origin.name}</p>
                </div>
            </article>
        </>
    );
}

export default Character;