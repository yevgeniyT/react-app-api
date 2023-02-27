import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const CharacterDetails = ({ data }) => {
    const { id } = useParams();

    const index = data.findIndex(character => character.id.toString() === id);

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
                            <h5 className="description__header ">Ditailed information:</h5>
                            {[
                                { key: "Created at:", value: data[index].created },
                                { key: "Status:", value: data[index].status },
                                { key: "Species:", value: `${data[index].species ? data[index].species : '-----'}` },
                                { key: "Gender:", value: `${data[index].gender ? data[index].gender : '-----'}` },
                                { key: "Type:", value: `${data[index].type ? data[index].type : ' -----'}` }
                            ].map(({ key, value }, index) => (
                                <p key={uuidv4()} className="typed" style={{ animationDelay: `${index * 1}s` }}>
                                    <span className="title__dsc">{key}</span> {value}
                                </p>
                            ))}
                        </div>
                        <div className="container__col" >
                            <div>
                                <p className="title__dsc">Origin:</p>
                                <p className="character__link">{data[index].origin.name ? data[index].origin.name : '-----'}</p>
                            </div>
                            <div>
                                <p className="title__dsc">Current location:</p>
                                <p>{data[index].location ? data[index].location.name : '-----'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CharacterDetails;
