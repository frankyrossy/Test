import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Home from './pages/home'; // Die bestehende Buchungsseite

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
