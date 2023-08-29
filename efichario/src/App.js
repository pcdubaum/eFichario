import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';

// hooks
import { useState, useEffect } from "react";
import Home from './components/Home';
import Crase from './pages/Crase';
import Acentuacao from './pages/Acentuacao';
import RegimentoInterno from './pages/RegimentoInterno';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/crase' element={<Crase />} />
          <Route path='/acentuacao' element={<Acentuacao />} />
          <Route path='/regimento_interno' element={<RegimentoInterno />} />
          <Route path='/postarLei' element={<RegimentoInterno />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
