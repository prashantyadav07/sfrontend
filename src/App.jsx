import { Routes, Route } from 'react-router-dom';
import SchoolERP from './pages/SchoolERP'; // Aapka Home Page
import Contact from './pages/Contact';     // Aapka Naya Contact Page
import SchoolApps from './components/sections/SchoolApps';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SchoolERP />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/school-apps" element={<SchoolApps />} />
    </Routes>
  );
}

export default App;