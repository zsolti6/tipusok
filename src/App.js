import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './Lista';
import NavBar from './Navbar';
import TipusSingle from './TipusSingle';
import TipusCreate from './TipusCreate';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/get-tipusok" element={<Lista />} />
        <Route path="/tipus/:tipusId" element={<TipusSingle />} />
        <Route path="/put-tipus" element={<TipusCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
