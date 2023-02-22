import React, { useState, useEffect} from 'react';
import { getAllCharacters } from '../services/postServices';

const Home = () => {
    // gonna display here CharactersList
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
              setIsPending(false);
            } catch (error) {
              setError(error.message);
              setIsPending(false);
            }
          };
        useEffect(() => {
            fetchCharacters()
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

