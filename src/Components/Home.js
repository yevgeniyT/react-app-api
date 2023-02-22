import React, { useState, useEffect} from 'react';
const API_URL = "https://rickandmortyapi.com/api/character"

const Home = () => {
    // gonna display here CharactersList
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const [isPending, setIsPending] = useState(true);

        const fetchHeros =() =>{
            setIsPending(true)
            fetch(API_URL)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Could not fetch that data..');
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
        }
        useEffect(() => {
            fetchHeros()
        }, [])
    
        const renderData = data && data.results.map((character) => {
            return(
                <div  key = {character.id}>
                    <h3>{character.name}</h3>
                    <h3>{character.gender}</h3> 
                </div>
            )
        })
        return (<div>
            <h1> Hello from home </h1>
            {isPending && <p>Loading data .....</p>}
            {error ? <p>{error}</p>: renderData }
            </div>);
    }
    
    // export default useFetch;
    // return ( <>Hi from home</> );
 
export default Home;

