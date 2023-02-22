import { useState, useEffect} from 'react';
const API_URL = "https://rickandmortyapi.com/api/character"
// TODO change to async await 
const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Could not fetch that data..');
                }
                return response.json();
            })
            .then((json) => {
                setData(json);
                setIsPending(false);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setData(null);
                setIsPending(false);
            });
    }, [])

    return (<div>
        {isPending && <p>Loading data .....</p>}
        {error ? <p>{error}</p>: {data} }
        console.log({data});
    </div>);
}

export default useFetch;