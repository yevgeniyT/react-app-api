import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../services/useFetch";

import { species, status, images } from "../data/data";
import { Loading, Error } from "./handlers";

const NewCharacter = ({ onCreate }) => {
    const initCharacter = {
        image: 'man',
        name: '',
        status: 'alive',
        species: 'human',
        origin: {
            name: 'unknown'
        },
    }
    const [character, setCharacter] = useState(initCharacter);
    const [creating, setCreating] = useState(false);
    const [nameValid, setNameValid] = useState('name-invalid');
    const nameLength = 3;

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(nameValid === 'name-valid'){
            setCreating(true);
            setTimeout(()=>{ // faking a post request
                onCreate(character);
                setCharacter(initCharacter);
                setCreating(false);
                navigate('/');
            }, 1000);
        }
    }

    const handleChange = (event) => {
        if(event.target.value.length < nameLength){
            setNameValid('name-invalid');
        } else {
            setNameValid('name-valid')
        }
        setCharacter((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value }
        });
    }

    const handleOrigin = (event) => {
        setCharacter((prevState) => {
            return { ...prevState, [event.target.name]: { name: event.target.value } }
        });
    }

    const { data: initLocations, error, isPending } = useFetch("locations");
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        if (initLocations) {
            setLocations(initLocations.results.map((location) =>
                <option key={location.id} value={location.name}>{location.name}</option>
            ));
            setLocations(prevState => [...prevState,
            <option key={prevState.length + 1} value="unknown">unknown</option>
            ])
        }
    }, [initLocations]);

    // setting the data
    const speciesOptions = species.map(species =>
        <option key={species.id} value={species.name}>{species.name}</option>);

    const statusOptions = status.map(status =>
        <option key={status.id} value={status.name}>{status.name}</option>);

    const imagesOptions = images.map(image =>
        <option key={image.id} value={image.name}>{image.name}</option>);

    return (
        <section className="create">
            <h2 className="create__header flex-centered">Expand the Universe of Rick and Morty!</h2>
            {isPending && <Loading />}
            {error ? <Error message={error.message} /> :
                <form onSubmit={handleSubmit} className="flex-centered">
                    <div className={`form__element ${nameValid}`}>
                        <label htmlFor="fullName">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={character.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form__element">
                        <label htmlFor="status">Status</label>
                        <select
                            name="status"
                            id="status"
                            value={character.status}
                            onChange={handleChange}>
                            {statusOptions}
                        </select>
                    </div>
                    <div className="form__element">
                        <label htmlFor="species">Species</label>
                        <select
                            name="species"
                            id="species"
                            value={character.species}
                            onChange={handleChange}>
                            {speciesOptions}
                        </select>
                    </div>
                    <div className="form__element">
                        <label htmlFor="origin">Origin</label>
                        <select
                            name="origin"
                            id="origin"
                            value={character.origin.name}
                            onChange={handleOrigin}>
                            {locations}
                        </select>
                    </div>
                    <div className="form__element">
                        <label htmlFor="image">Your character is </label>
                        <select
                            name="image"
                            id="image"
                            value={character.image}
                            onChange={handleChange}>
                            {imagesOptions}
                        </select>
                    </div>
                    {creating ? 
                        <button type="submit" className="blinking">Adding...</button> :
                        <button type="submit">Add Character</button>}
                </form>
            }
        </section>
    );
}

export default NewCharacter;