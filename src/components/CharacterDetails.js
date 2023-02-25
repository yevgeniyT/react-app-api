import {useParams } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();

//     return (
//         <section className="details">
//             I am details about character {id}
//         </section>
//     );
// }

return (
    <div className="character">
        <div>
            <img  alt="Rick and Morty" />
            <div className="character__details">
                <h4 className="character__name">id Name: </h4>
                <div className='caracter__dsc'>
                    <p>createrd at: </p>
                    <p className="character__status">Status:</p>
                    <p className="character__species">Species:</p>
                    <p>Gender</p>
                    <p>Tepe</p>
                    <a href="/">Origin name:</a>
                    <a href="/">Lacation name</a>
                </div>
            </div>
        </div>
    </div>
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