import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';
import Option1 from './components/option1';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <Navbar onSelect={setSelectedOption} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About value={selectedOption} />} />
        <Route path="/contact" element={<Contact value={selectedOption} />} />
        <Route path="/services" element={<Services value={selectedOption} />} />
        <Route path="/option1" element={<Option1 value={selectedOption} />} />
      </Routes>
    </>
  );
}

export default App;