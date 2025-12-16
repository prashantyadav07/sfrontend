import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SchoolERP from './pages/SchoolERP';
import './App.css';

function App() {
  const location = useLocation();
  const isSchoolERPPage = location.pathname === '/';

  return (
    
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)'
      }}>
        {!isSchoolERPPage && <Navbar />}
        
        <Routes>
          <Route path="/" element={<SchoolERP />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    
  );
}

export default App;