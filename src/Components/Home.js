import React, { useState, useEffect } from "react";

import CharactersList from './CharactersList';
const API_URL = 'https://rickandmortyapi.com/api/character';

const Home = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true);
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Fetching failed');
                }
                return res.json();
            })
            .then((json) => {
                setData(json);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                setData([]);
                setIsPending(false);
                setError(e.message);
            });
    }, []);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <CharactersList data={data} title="All Characters" />}
        </div>
    );
}

export default Home;