import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import NewCharacter from './components/NewCharacter';
import { NotFound } from './components/handlers';
import useFetch from './services/useFetch'
import { useState, useEffect } from 'react';
import { Error, Loading } from './components/handlers';


function App() {

  const { data, error, isPending } = useFetch();

  const [characters, setCharacters] = useState([]);

  const onCreate = (character) => {
    const newCharacter = { id: characters.length + 1, ...character };
    setCharacters(prevState => {
      return [...prevState, newCharacter];
    });
  }

  useEffect(() => {
    setCharacters(data && data.results);
  }, [data])

  return (
    <div className="page-content">
      <Router>
        <Header />
        {isPending && <Loading />}
        {error && <Error message={error} />}
        {data &&
          <main>
            <Routes>
              <Route exact path='/' element={<Home data={characters} />} />
              <Route path='/create' element={<NewCharacter onCreate={onCreate} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>}
          <Footer />
      </Router>
    </div>
  );
}
export default App;