import { useState, useEffect } from 'react';
import {getAllCharacters, getAllLocations, getAllEpisodes, getCustomData} from './postServices';

const useFetch = (getData) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const fetchData = async () => {
        try {
            let response = null;
            switch (getData){
                case "characters":
                    response = await getAllCharacters();
                break;
                case "locations":
                    response = await getAllLocations();
                break;
                case "episodes":
                    response = await getAllEpisodes();
                break;
                default:
                    response = await getCustomData(getData);
            }
            
            if (!response.ok) { 
                throw new Error("Could not fetch that data..");
            }
            const json = await response.json();
            setData(json);
            setIsPending(false);
            console.log(json);
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