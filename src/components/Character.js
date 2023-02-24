import React from 'react';
import { Link } from 'react-router-dom';

import {FaBan} from 'react-icons/fa';

const Character = (props) => {
    const { character, getId } = props;


const handleCahacterDelete = (id,e) =>{
    e.preventDefault();
getId(id)
}

    return (
        <div className="character">
            <Link className='link' to={`/characters/${character.id}`}>
                <img className="character__img" src={character.image} alt="Rick and Morty" />
                <div className="character__details">
                    <h4 className="character__name">{character.name}</h4>
                    <div className='caracter__dsc'>
                        <div>
                            <p className="character__status">Status: {character.status}</p>
                            <p className="character__species">Species: {character.species}</p>
                            <p className="character__origin">Origin: {character.origin.name}</p>
                        </div>
                        <div>
                             <button onClick={(e)=>{handleCahacterDelete(character.id, e )}}>
                             <FaBan/>
                             </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Character;
