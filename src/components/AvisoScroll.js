// AvisoScroll.js
import React from 'react';
import './AvisoScroll.css';

const AvisoScroll = ({ preguntas }) => {
  return (
    <div>
      <div className="scroll-container">
        {preguntas.map((item, index) => (
          <div key={index} className="scroll-card">
            <h4>{item.pregunta}</h4>
            <p>{item.respuesta}</p>
            <a href="/FrecuenteDetalle" className="leer-mas">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvisoScroll;
