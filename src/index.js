import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AvisoLegal from './components/AvisoLegal';
import DocumentoDetalle from './components/DocumentoDetalle';
import FrecuenteDetalle from './components/FrecuenteDetalle';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';
ReactDOM.render(
  <Router>
    <Navbar /> {/* Agrega el componente Navbar al Router */}
    
    <Routes>
      <Route path="/" element={<AvisoLegal />} />
      <Route path="/DocumentoDetalle" element={<DocumentoDetalle />} />
      <Route path="/FrecuenteDetalle" element={<FrecuenteDetalle />} />
    </Routes>
   
  </Router>,
  document.getElementById('root')
  
);
