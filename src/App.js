import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './components/Home';
import './App.css';
import './index.css';

function AppContent({ mode, toggleMode }) {
  const location = useLocation();
  const showFooter = location.pathname === "/"; 

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {showFooter && <Footer />} 
    </>
  );
}

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      setMode('light');
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  };

  return (
    <BrowserRouter>
      <AppContent mode={mode} toggleMode={toggleMode} />
    </BrowserRouter>
  );
}