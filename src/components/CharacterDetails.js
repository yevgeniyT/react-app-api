import { useParams } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();

    return (
        <section className="details">
            I am details about character {id}
        </section>
    );
}

export default CharacterDetails;