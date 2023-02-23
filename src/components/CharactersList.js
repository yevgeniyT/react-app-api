import React from 'react';

import Character from './Character';

const CharactersList = (props) => {
    const { data } = props;
    return (
        <section className="data">
             {console.log("fake change is here lol")}
            {data.map((data) => (
                <Character key={data.id} character={data} />
            ))}
        </section>
    );
};

export default CharactersList;