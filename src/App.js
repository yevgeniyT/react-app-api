import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home';
import NewCharacter from './components/NewCharacter';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="page-content">
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/add' element={<NewCharacter />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
