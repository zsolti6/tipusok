import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './Lista';
import NavBar from './Navbar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/get" element={<Lista />} />
      </Routes>
    </Router>
  );
}

export default App;
