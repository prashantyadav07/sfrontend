import { Routes, Route } from 'react-router-dom';
import SchoolERP from './pages/SchoolERP'; // Aapka Home Page
import Contact from './pages/Contact';     // Aapka Naya Contact Page
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SchoolERP />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;