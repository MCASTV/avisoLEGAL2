// AvisoLegal.js
import React from 'react';
import AvisoFaq from './AvisoFaq';
import AvisoScroll from './AvisoScroll';

const AvisoLegal = () => {
  const preguntasPrincipales = [
    {
      pregunta: '¿Cuál es nuestro compromiso de privacidad?',
      respuesta: 'Nuestro compromiso es proteger la información personal de nuestros usuarios...',
    },
    {
      pregunta: '¿Cómo manejamos la información del usuario?',
      respuesta:
        'Manejamos la información del usuario de manera segura y confidencial. Utilizamos tecnologías...',
    },
    // Agrega más preguntas principales según sea necesario
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Qué derechos tienen los usuarios sobre sus datos?',
      respuesta:
        'Los usuarios tienen el derecho de acceder, corregir, eliminar o transferir sus datos personales...',
    },
    {
      pregunta: '¿Cómo protegemos la seguridad de la información?',
      respuesta:
        'Implementamos medidas de seguridad, como encriptación y protocolos de seguridad avanzados, para...',
    },
    {
      pregunta: '¿Cómo puedo ejercer mis derechos de privacidad?',
      respuesta:
        'Puedes ejercer tus derechos de privacidad poniéndote en contacto con nuestro equipo de soporte...',
    },
    // Agrega más preguntas frecuentes según sea necesario
  ];

  return (
      <section className="aviso-legal-container text-gray-600 body-font">

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4"></div>
            <h2  align="center">Nuestro Compromiso</h2>
            {/* Utiliza el componente AvisoFaq en lugar de AvisoLegalAccordion */}
                <AvisoFaq preguntas={preguntasPrincipales} />
      <h2 align="center">Preguntas Frecuentes</h2>
      {/* Utiliza el componente AvisoScroll en lugar de AvisoLegalFAQScroll */}
              <AvisoScroll preguntas={preguntasFrecuentes} />
          </div>
          
      </section>
      
      
  );
};

export default AvisoLegal;
