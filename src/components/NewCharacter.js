import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCharacter = ({ onCreate }) => {
    const [character, setCharacter] = useState({
        name: '',
        status: '',
        species: '',
        origin: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(character);
        setCharacter(
            {
                name: '',
                status: '',
                species: '',
                origin: ''
            });
        navigate('/');
    }

    const handleChange = (event) => {
        setCharacter((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value }
        });
    }

    return (
        <section className="create">
            <h2 className="create__header">Expand the Universe of Rick and Morty!</h2>
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
                <input
                    type="text"
                    name="status"
                    required
                    value={character.status}
                    onChange={handleChange}
                />
                <label htmlFor="species">Species</label>
                <input
                    type="text"
                    name="species"
                    required
                    value={character.species}
                    onChange={handleChange}
                />
                <label htmlFor="origin">Origin</label>
                <input
                    type="text"
                    name="origin"
                    required
                    value={character.origin}
                    onChange={handleChange}
                />
                <button type="submit">Add Character</button>
            </form>
        </section>
    );
}

export default NewCharacter;