import useFetch from '../services/useFetch'
import CharactersList from './CharactersList';
import { Error, Loading } from './handlers';

const Home = () => {
    const { data, error, isPending } = useFetch();
    return (
        <section className='home'>
            {console.log("fake change is here lol")}
            <h1> Welcome to Rick and Morty Universe </h1>
            {isPending && <Loading />}
            {data && <CharactersList data={data.results} />}
            {error && <Error message={error} />}
        </section>);
}

export default Home;
