import { useState, useEffect } from 'react';
import { getAllCharacters } from './postServices';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const fetchCharacters = async () => {
        try {
            const response = await getAllCharacters();
            if (!response.ok) {
                throw new Error("Could not fetch that data..");
            }
            const json = await response.json();
            setData(json);
            console.log(json);
            setIsPending(false);
        } catch (error) {
            setError(error.message);
            setIsPending(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return { data, error, isPending }
}

export default useFetch;