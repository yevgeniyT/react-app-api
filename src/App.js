import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/Home';
import NewCharacter from './components/NewCharacter';
import CharacterDetails from './components/CharacterDetails';
import Footer from "./components/Footer";

import { v4 as uuidv4 } from 'uuid';
import useFetch from './services/useFetch';
import { useState, useEffect } from 'react';
import { Error, Loading, NotFound } from './components/handlers';

function App() {
  const { data, error, isPending } = useFetch("characters");

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(data && data.results);
  }, [data]);

  const onCreate = (character) => {
    const newCharacter = { id: uuidv4(), ...character };
    setCharacters(prevState => {
      return [...prevState, newCharacter];
    });
  }

  const handleDeleteCharacter = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className="page-content">
      <Router>
        <Header />
        {isPending && <Loading />}
        {error && <Error message={error} />}
        {characters &&
          <main>
            <Routes>
              <Route path='/' element={
                <Home data={characters} onDeleteCharacter={handleDeleteCharacter} />
              } />
              <Route path='/create' element={<NewCharacter onCreate={onCreate} />} />
              <Route path='characters/:id' element={<CharacterDetails data={characters} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>}
        <Footer />
      </Router>
    </div>
  );
}
export default App;