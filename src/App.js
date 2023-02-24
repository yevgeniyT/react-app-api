import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import SearchBar from './components/SearchBar'
import Home from './components/Home';
import NewCharacter from './components/NewCharacter';
import CharacterDetails from './components/CharacterDetails';
import Footer from "./components/Footer";


import useFetch from './services/useFetch';
import { useState, useEffect } from 'react';
import { Error, Loading, NotFound } from './components/handlers';

import { images } from "./data/data";

function App() {
  const { data, error, isPending } = useFetch("characters");

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(data && data.results);
  }, [data]);

  const onCreate = (character) => {
    const newCharacter = { id: characters.length + 1, ...character, image: images.find(image => image.name === character.image).src };
    setCharacters(prevState => {
      return [...prevState, newCharacter];
    });
  }

  return (
    <div className="page-content">
      <Router>
        <Header>
          {data && <SearchBar data={data.results}/>}
        </Header>

        {isPending && <Loading />}
        {error && <Error message={error} />}
        {data &&
          <main>
            <Routes>
              <Route path='/' element={<Home data={characters} />} />
              <Route path='/create' element={<NewCharacter onCreate={onCreate} />} />
              <Route path='characters/:id' element={<CharacterDetails />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>}
        <Footer />
      </Router>
    </div>
  );
}
export default App;