import React from 'react';

import Character from './Character';

const CharactersList = (props) => {
    const { data } = props;
    return (
        <section className="data">
            {data.image.map((data) => (
                <Character key={data.id} data={data} />
            ))}
        </section>
    );
};

export default CharactersList;