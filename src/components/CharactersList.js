import React from 'react';

import Character from './Character';

const CharactersList = (props) => {
    const { data, getIdHome} = props;


const getId = (getId) => {
    getIdHome(getId)
};

    return (
        <section className="data">
            {data.map((data) => (
                <Character key={data.id} character={data} getId ={getId}/>
            ))}
        </section>
    );
};

export default CharactersList;