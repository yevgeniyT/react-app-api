import {useParams } from "react-router-dom";

const CharacterDetails = ({data}) => {
    const { id } = useParams();
    const index = data.findIndex(character => character.id === parseInt(id));
    return (
        <section className="details flex-centered">
         <div className="character-ditails">
            <div>
                <h4 className="character__name">{data[index].name}</h4>
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
                                <a href={data[index].origin.url}>{data[index].origin.name}</a>
                            </div>
                            <div>
                                <p>Current location:</p>
                                <a href={data[index].location.url}>{data[index].location.name}</a>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
        </section>
    );
}

export default CharacterDetails;


 
  
    
    // "origin": {
    //   "name": "Earth",
    //   "url": "https://rickandmortyapi.com/api/location/1"

    // "location": {
    //   "name": "Earth",
    //   "url": "https://rickandmortyapi.com/api/location/20"

    // // "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    // "episode": [
    //   "https://rickandmortyapi.com/api/episode/1",
    //   "https://rickandmortyapi.com/api/episode/2",
    //   // ...
    // ],
    // "url": "https://rickandmortyapi.com/api/character/2",
    //  }
                                {/* <div className="col-75 type">
                            <p className="typed">Ditaild Ditailed information:</p>
                            <p className="typed">createrd at: {data[index].created} </p>
                            <p className="typed">Status: {data[index].status}</p>
                            <p className="typed">Species: {data[index].species}</p>
                            <p className="typed">Gender: {data[index].gender}</p>
                            <p className="typed">Tepe: {data[index].type}</p>
                        </div> */}