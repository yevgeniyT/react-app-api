import {useParams} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const CharacterDetails = ({data}) => {
    const { id } = useParams();
    const index = data.findIndex(character => character.id === parseInt(id));
    return (
        <section className="details flex-centered">
         <div className="character-details">
            <div>
                <h4 className="ditails__header">{data[index].name}</h4>
            </div>            
            <div className="container__col character">
                <img className="character__img" src={data[index].image} alt="Rick and Morty" />
                    <div className='character__dsc'>
                        <div className="col-75 type">
                            {["Detailed information:",
                            `createrd at: ${data[index].created}`,
                            `Status: ${data[index].status}`,
                            `Species: ${data[index].species}`,
                            `Gender: ${data[index].gender}`,
                            `Type: ${data[index].type}`].map((text, index) => (
                            <p key={uuidv4()} className="typed" style={{animationDelay: `${index * 1}s`}}>{text}</p> ))}
                        </div>

                        <div className="container__col col-25" >
                            <div>
                                <p>Origin:</p>
                                <p className="character__link">{data[index].origin.name}</p>
                            </div>
                            <div>
                                <p>Current location:</p>
                                <p className="character__link">{data[index].location.name}</p>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
        </section>
    );
}

export default CharacterDetails;