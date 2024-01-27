import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import './Navbar.css';  // Importa tu archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        EUREKA SIGMA
      </Link>
      <ul className="navbar-menu">
        <li className="nav-item">
          <Link to="/DocumentoDetalle" className="nav-link">
            Documento Detalle
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/FrecuenteDetalle" className="nav-link">
            Frecuente Detalle
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
