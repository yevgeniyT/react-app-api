import { useState, useEffect} from 'react';
// TODO change to async await 
const useFetch = (URL) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(URL)
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
    }, [URL])

    return ({ data, isPending, error });
}

export default useFetch;