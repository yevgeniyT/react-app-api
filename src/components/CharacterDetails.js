import {useParams } from "react-router-dom";

const CharacterDetails = ({data}) => {
    const { id } = useParams();
    const index = data.findIndex(character => character.id === parseInt(id));
    return (
        <section className="details flex-centered">
         <div className="character-ditails">
            <div>
                <h4 className="ditails__header">{data[index].name}</h4>
            </div>            
            <div className="conteiner__col character">
                <img className="character__img" src={data[index].image} alt="Rick and Morty" />
                    <div className='character__dsc'>
                        <div className="col-75 type">
                            {["Ditaild information:",
                            `createrd at: ${data[index].created}`,
                            `Status: ${data[index].status}`,
                            `Species: ${data[index].species}`,
                            `Gender: ${data[index].gender}`,
                            `Type: ${data[index].type}`].map((text, index) => (
                            <p className="typed" style={{animationDelay: `${index * 1}s`}}>{text}</p> ))}
                        </div>

                        <div className="conteiner__col col-25" >
                            <div>
                                <p>Origin:</p>
                                <a className="character__link"  href={data[index].origin.url}>{data[index].origin.name}</a>
                            </div>
                            <div>
                                <p>Current location:</p>
                                <a className="character__link" href={data[index].location.url}>{data[index].location.name}</a>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
        </section>
    );
}

export default CharacterDetails;