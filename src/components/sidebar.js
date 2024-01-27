import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Importa el archivo de estilos CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Contenido del sidebar */}
      <nav className="py-6">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/DocumentoDetalle">Detalle del Documento</Link>
          </li>
          <li>
            <Link to="/FrecuenteDetalle">Detalle Frecuente</Link>
          </li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

