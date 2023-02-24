import { useState, useEffect } from 'react';
import {getAllCharacters, getAllLocations, getAllEpisodes} from './postServices';

const useFetch = (getData) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const fetchData = async () => {
        try {
            let response = null;
            switch (getData){
                case "locations":
                    response = await getAllLocations();
                break;
                case "episodes":
                    response = await getAllEpisodes();
                break;
                default:
                    response = await getAllCharacters();
            }
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
        fetchData();
    }, []);

    return { data, error, isPending }
}

export default useFetch;