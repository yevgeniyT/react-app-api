import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../services/useFetch";

import { species, status, images } from "../data/data";
import { Loading, Error } from "./handlers";

const NewCharacter = ({ onCreate }) => {
    const initCharacter = {
        image: 'woman',
        name: '',
        status: 'alive',
        species: 'human',
        origin: {
            name: 'unknown'
        },
    }

    const [character, setCharacter] = useState(initCharacter);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        console.log(images.find(image => image.name === character.image).src);
        console.log(character);
        onCreate(character);
        setCharacter(initCharacter);
        navigate('/');
    }

    const handleChange = (event) => {
        console.log(character);
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
            <h2 className="create__header">Expand the Universe of Rick and Morty!</h2>
            {isPending && <Loading />}
            {error ? <Error message={error.message}/> :
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={character.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="status">Status</label>
                    <select
                        name="status"
                        id="status"
                        value={character.status}
                        onChange={handleChange}>
                        {statusOptions}
                    </select>
                    <label htmlFor="species">Species</label>
                    <select
                        name="species"
                        id="species"
                        value={character.species}
                        onChange={handleChange}>
                        {speciesOptions}
                    </select>
                    <label htmlFor="origin">Origin</label>
                    <select
                        name="origin"
                        id="origin"
                        value={character.origin.name}
                        onChange={handleOrigin}>
                        {locations}
                    </select>
                    <label htmlFor="image">How would you describe your character?</label>
                    <select
                        name="image"
                        id="image"
                        value={character.image}
                        onChange={handleChange}>
                        {imagesOptions}
                    </select>
                    <button type="submit">Add Character</button>
                </form>
            }
        </section>
    );
}

export default NewCharacter;