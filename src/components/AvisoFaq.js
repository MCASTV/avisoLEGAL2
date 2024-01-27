// AvisoFaq.js
import React from 'react';
import './AvisoFaq.css';
import { Link } from 'react-router-dom';
const AvisoFaq = ({ preguntas }) => {
  return (
    <div className="faq-container">
      {preguntas.map((item, index) => (
        <div key={index} className="faq-card">
          <h4>{item.pregunta}</h4>
          <p>{item.respuesta}</p>
          <a class="leer-mas" href="/FrecuenteDetalle/">Leer más</a>
        </div>
      ))}
    </div>
  );
};

export default AvisoFaq;
